import { Component,OnInit,HostListener } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

constructor(private service:MovieApiServiceService){

}

bannerResult:any=[]
trendingMovieResult:any=[]
actionMovieResult:any=[]
adventureMovieResult: any = []
animationMovieResult: any = []
comedyMovieResult: any = []
documentaryMovieResult: any = []
sciencefictionMovieResult: any = []
thrillerMovieResult: any = []


ngOnInit(): void {
this.bannerData()
this.trendingData()
this.actionMovie()
this.adventureMovie();
this.comedyMovie();
this.animationMovie();
this.documentaryMovie();
this.sciencefictionMovie();
this.thrillerMovie();
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


//bannerdata

bannerData(){
  this.service.bannerApiData().subscribe((result:any)=>{
    console.log(result,'bannerresult#');
    this.bannerResult = result.results
    
  })
}
trendingData(){
  this.service.trendingMovieApiData().subscribe((result:any)=>{
    console.log(result,'trendingresult#');

    this.trendingMovieResult=result.results

    // this.trendingMovieResult
  })
}

//action
actionMovie(){
  this.service.fetchActionMovies().subscribe((result:any)=>{
    this.actionMovieResult=result.results
  })
}
//adventure
adventureMovie() {
  this.service.fetchAdventureMovies().subscribe((result:any) => {
    this.adventureMovieResult = result.results;
  });
}

 // animation 
 animationMovie() {
  this.service.fetchAnimationMovies().subscribe((result:any) => {
    this.animationMovieResult = result.results;
  });
}
 // comedy 
 comedyMovie() {
  this.service.fetchComedyMovies().subscribe((result:any) => {
    this.comedyMovieResult = result.results;
  });
}
 // documentary 
 documentaryMovie() {
  this.service.fetchDocumentaryMovies().subscribe((result:any) => {
    this.documentaryMovieResult = result.results;
  });
}

 // science-fiction 
 sciencefictionMovie() {
  this.service.fetchScienceFictionMovies().subscribe((result:any) => {
    this.sciencefictionMovieResult = result.results;
  });
}

// thriller
thrillerMovie() {
  this.service.fetchThrillerMovies().subscribe((result:any) => {
    this.thrillerMovieResult = result.results;
  });
}
}
