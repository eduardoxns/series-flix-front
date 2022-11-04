import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }

  @ViewChild('updateName') updateName: ElementRef;
  @ViewChild('updateGender') updateGender: ElementRef;
  @ViewChild('updateDuration') updateDuration: ElementRef;
  @ViewChild('updateRating') updateRating: ElementRef;

  @ViewChild('createName') createName: ElementRef;
  @ViewChild('createGender') createGender: ElementRef;
  @ViewChild('createDuration') createDuration: ElementRef;
  @ViewChild('createRating') createRating: ElementRef;

  movies:any;
  itemId:any;

  ngAfterViewInit(){
    this.http.get(environment.apiUrl + '/movies').subscribe(
      data => {
        this.movies = data;
      }
    )
  }

  pickItem(item: any){ this.itemId = item.id }
  
  updateItem(){
    this.http.put(environment.apiUrl + '/movies/' + this.itemId,
    {
      nome: this.updateName.nativeElement.value,
      gender: this.updateGender.nativeElement.value,
      duration: this.updateDuration.nativeElement.value,
      rating: this.updateRating.nativeElement.value
    }).subscribe(() => {
      window.location.reload()
    })
  }
  deleteItem(){
    this.http.delete(environment.apiUrl + '/movies/' + this.itemId)
    .subscribe(() => {
      window.location.reload()
    })
  }
  createItem(){
    this.http.post(environment.apiUrl + '/movies/',
    {
      nome: this.createName.nativeElement.value,
      gender: this.createGender.nativeElement.value,
      duration: this.createDuration.nativeElement.value,
      rating: this.createRating.nativeElement.value
    }).subscribe(() => {
      window.location.reload()
    })
  }
}