import { Component, OnInit } from '@angular/core';
import {StarRatingColor} from '../star-rating/star-rating.component';
import { ActivatedRoute , Router } from '@angular/router';
import { Film } from '../../_models/film';
import { FilmService } from '../../_service/film.service';
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
    private  router: Router
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
  starColor: StarRatingColor = StarRatingColor.primary;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  film$: Film =  new Film(0, '', 0,
    '', '', '', new Date(),
    '', '', '', '/lotte.jpg',
    'https://www.youtube.com/watch?v=GxV4BYmWnBE&list=RDGxV4BYmWnBE&start_radio=1', 0);

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

    });


  }
  findById(id: number): void{
    this.filmService.getAll().subscribe((x) => {
      this.films = x;
      // this.films.forEach(( x) => {
      //   if (x.id === id) {  this.film$ = x; }
      // });
      // tslint:disable-next-line:no-shadowed-variable
      this.films.forEach(x =>  {
         if (x.id === id) {this.film$ = x; }
         console.log(this.film$.name);
      });
    });



  }
  onContainerClick(): void{

  }
  comment(): void{

  }


}
