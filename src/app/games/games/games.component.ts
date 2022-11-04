import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements AfterViewInit {
   
  constructor(private http: HttpClient) { }

  @ViewChild('updateName') updateName: ElementRef;
  @ViewChild('updateCategory') updateCategory: ElementRef;
  @ViewChild('updatePlatform') updatePlatform: ElementRef;
  @ViewChild('updateRating') updateRating: ElementRef;

  @ViewChild('createName') createName: ElementRef;
  @ViewChild('createCategory') createCategory: ElementRef;
  @ViewChild('createPlatform') createPlatform: ElementRef;
  @ViewChild('createRating') createRating: ElementRef;

  games:any;
  itemId:any;

  ngAfterViewInit(){
    this.http.get(environment.apiUrl + '/games').subscribe(
      data => {
        this.games = data;
      }
    )
  }

  pickItem(item: any){ this.itemId = item.id }
  
  updateItem(){
    this.http.put(environment.apiUrl + '/games/' + this.itemId,
    {
      game_name: this.updateName.nativeElement.value,
      category: this.updateCategory.nativeElement.value,
      platform: this.updatePlatform.nativeElement.value,
      rating: this.updateRating.nativeElement.value
    }).subscribe(() => {
      window.location.reload()
    })
  }
  deleteItem(){
    this.http.delete(environment.apiUrl + '/games/' + this.itemId)
    .subscribe(() => {
      window.location.reload()
    })
  }
  createItem(){
    this.http.post(environment.apiUrl + '/games/',
    {
      game_name: this.createName.nativeElement.value,
      category: this.createCategory.nativeElement.value,
      platform: this.createPlatform.nativeElement.value,
      rating: this.createRating.nativeElement.value
    }).subscribe(() => {
      window.location.reload()
    })
  }
}