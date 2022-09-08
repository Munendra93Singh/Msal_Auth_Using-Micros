import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { DataLoginService } from 'src/app/data-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers :[DataLoginService]
})
export class HeaderComponent implements OnInit {
  title = 'Micosoft-Authentication';
  constructor(private _msalService:MsalService, private datalogin: DataLoginService){}
  ngOnInit(): void {
    this._msalService.instance.handleRedirectPromise().then(
      res =>{
        if(res != null && res.account != null){
          this._msalService.instance.setActiveAccount(res.account)
        }
      }
    )
  }
  isLoggedIn(){
    return this.datalogin.isLoggedIn();
  }
  login(){
    this.datalogin.login();
  }
  logout(){
    this.datalogin.logout();
    return 
  }
}
