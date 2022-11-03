import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  movies:any;

  ngOnInit(){
    this.http.get('http://localhost:4566/restapis/d4ndye49hp/local/_user_request_/movies').subscribe(
      data => {
        this.movies = data;
      }
    )
  }
}