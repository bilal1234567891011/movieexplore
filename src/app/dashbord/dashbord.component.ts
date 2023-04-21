import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
title='showtime'
navbg:any
@HostListener('document:scroll') scrollover(){
console.log(document.body.scrollTop,'scrolllength#');


  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
this.navbg={
  'background-color':'#000000'
}
}else
{
  this.navbg={}
}
}
}
