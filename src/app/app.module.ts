import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';

import { environment } from 'src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { ViewComponent } from './components/view/view.component';
import { FooterComponent } from './components/footer/footer.component';




export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.clientId,
      redirectUri: environment.redirectUri,
      authority: environment.authority,
    }
  });
}
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', environment.scopes);
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me/photo/$value',  environment.scopes);
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/users', environment.scopes)
  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}
@NgModule({
  declarations: [
    AppComponent,

    ProfileComponent,
    HeaderComponent,
    ViewComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }, {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
