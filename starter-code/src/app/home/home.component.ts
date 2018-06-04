import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTheMovies: Array<any> = [];

  constructor(
    private myService: MovieService,
    private myRouter: Router
  ) { }

  ngOnInit() {
    this.allTheMovies = this.myService.getMovies();
    console.log('this.allTheMovies: ', this.allTheMovies);
  }

  goToMoviePage(theIdArgument){
    console.log('theIdArgument: ', theIdArgument);
    this.myRouter.navigate(['/movies', theIdArgument]);

  }

}
