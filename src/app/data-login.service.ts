import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class DataLoginService {


  constructor(private _msalService: MsalService,private _httpClient:HttpClient) { }
  isLoggedIn():boolean{
    return this._msalService.instance.getActiveAccount() != null;
  }
  login() {
    this._msalService.loginRedirect();
  }
  logout() {
    this._msalService.logoutPopup();
  }
  getAllProfileData(){
   return this._httpClient.get("https://graph.microsoft.com/v1.0/me")
    
  }
  getImg () {
    debugger
    return this._httpClient.get("https://graph.microsoft.com/v1.0/me/photo/$value", {responseType:'blob'})
    }
    getuserdata(){
    return this._httpClient.get("https://graph.microsoft.com/v1.0/users")
  }
}

