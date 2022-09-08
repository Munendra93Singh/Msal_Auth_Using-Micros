import { Component, OnInit } from '@angular/core';
import { DataLoginService } from 'src/app/data-login.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  allData? : any[];
  prfilename: any;
  profilePic ?: SafeResourceUrl;


  constructor(private dataloginservice: DataLoginService,private _domsanitizer:DomSanitizer ) { }

  ngOnInit(): void {
    debugger
 this.getprofile();
 this.getprofileimg();
  }


 getprofile(){
  this.dataloginservice.getAllProfileData().subscribe((res:any)=>{
    this.prfilename = res
  });
 }

 getprofileimg(){
  this.dataloginservice.getImg().subscribe(res  =>{
    var UrlCreate = window.URL || window.webkitURL
    this.profilePic=this._domsanitizer.bypassSecurityTrustResourceUrl(UrlCreate.createObjectURL(res));
  })
}
}