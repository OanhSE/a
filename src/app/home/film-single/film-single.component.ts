import { Component, OnInit } from '@angular/core';
import {StarRatingColor} from '../star-rating/star-rating.component';
import { ActivatedRoute , Router } from '@angular/router';
import { Film } from '../../_models/film';
import { FilmService } from '../../_service/film.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-film-single',
  // templateUrl: './film-single.component.html',
  // styleUrls: ['./film-single.component.css']
  templateUrl: './film-single.components.html',
  styleUrls: ['./film-single.components.css']
})

export class FilmSingleComponent implements OnInit {
  constructor(
    private  route: ActivatedRoute,
    private  filmService: FilmService,
    private  router: Router,
    private sanitizer: DomSanitizer,
  ) {


  }


  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  rating: number = Number(3);
  starCount: number = Number(5);
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  film$: Film =  new Film(0, '', 0,
    '', '', '', new Date(),
    '', '', '', '/lotte.jpg',
    'https://www.youtube.com/embed/Mddnpxc2pF4', 0);
  url$ = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Mddnpxc2pF4');
    films: Film[];
  onRatingChanged(rating): void{
    console.log(rating);
    this.rating = rating;
  }
  // getById(id: string): Film {
  //    this.filmService.findById(id).subscribe((x)=>{
  //      return x;
  //    })
  //   return  null;
  //
  // }


  ngOnInit(): void {

    this.route.params.subscribe((param) => {

      this.findById(param.id);
      this.transform(this.film$.urltrailer);

    });


  }
  findById(id: number): void{
   this.filmService.getFilmById(id).subscribe((result) => {
     this.film$ = result;
   });



  }
  onContainerClick(): void{

  }
  comment(): void{

  }
  transform(url): void{
    this.url$ = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  bookingTicket(film: Film): void{
  this.router.navigate(['/book-ticket', { idfilm: film.id }] );

}

}
