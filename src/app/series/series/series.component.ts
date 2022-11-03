import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})

export class SeriesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  series:any;

  ngOnInit(){
    this.http.get('http://localhost:4566/restapis/nw5tgu66rw/local/_user_request_/series').subscribe(
      data => {
        this.series = data;
      }
    )
  }
}