import { Component,HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieApiServiceService } from '../service/movie-api-service.service';
// import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private fb:FormBuilder, private service:MovieApiServiceService){}
  movieList:any
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


  searchForm=this.fb.group({
    movieName:[""]
})

searchData(){
  let Sdata={
    movieName:this.searchForm.value.movieName
  }

  this.service.getSearchMovie(Sdata).subscribe((data:any)=>{
    this.movieList=data.results
    console.log(this.movieList);

  })

}



  
  // searchForm = new FormGroup({
  //   'movieName':new FormControl(null)
  // })

  // submitForm(){
  //   console.log(this.searchForm.value,'searchform#');
    
  // }
}
