import { Component,OnInit,HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.css']
})
export class MovieDetailesComponent implements OnInit {

  movieData:any
  movieDetailes:any
  getMovieVideoResult:any
  getMovieCastResult:any
  constructor(private service:MovieApiServiceService, private sr: ActivatedRoute){}
ngOnInit(): void{
this.sr.params.subscribe((data:any)=>{
this.movieData=data["id"]

this.service.getMovieDetailes(this.movieData).subscribe((result:any)=>{
 this.movieDetailes=result
 console.log(this.movieDetailes);
})

this.service.getMovieVideo(this.movieData).subscribe((result:any)=>{
  result.results.forEach((element:any)=>{
    if(element.type=="Trailer"){
      this.getMovieVideoResult=element.key

    }
  })
  
  })

  this.service.getMovieCast(this.movieData).subscribe((result:any)=>{
    this.getMovieCastResult=result.cast
    console.log(this.getMovieCastResult);
    
  })
  
})
}

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
