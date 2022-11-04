import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})

export class SeriesComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }

  @ViewChild('updateName') updateName: ElementRef;
  @ViewChild('updateCategory') updateCategory: ElementRef;
  @ViewChild('updateSynopsis') updateSynopsis: ElementRef;
  @ViewChild('updateSeasons') updateSeasons: ElementRef;
  @ViewChild('updateRating') updateRating: ElementRef;
  @ViewChild('updateLaunchDate') updateLaunchDate: ElementRef;

  @ViewChild('createName') createName: ElementRef;
  @ViewChild('createCategory') createCategory: ElementRef;
  @ViewChild('createSynopsis') createSynopsis: ElementRef;
  @ViewChild('createSeasons') createSeasons: ElementRef;
  @ViewChild('createRating') createRating: ElementRef;
  @ViewChild('createLaunchDate') createLaunchDate: ElementRef;

  series:any;
  itemId:any;

  ngAfterViewInit(){
    this.http.get(environment.apiUrl + '/series').subscribe(
      data => { this.series = data }
    )
  }

  pickItem(item: any){ this.itemId = item.id }
  
  updateItem(){
    this.http.put(environment.apiUrl + '/serie/' + this.itemId,
    {
      title: this.updateName.nativeElement.value,
      category: this.updateCategory.nativeElement.value,
      synopsis: this.updateSynopsis.nativeElement.value,
      seasons: this.updateSeasons.nativeElement.value,
      rating: this.updateRating.nativeElement.value,
      launch_date: this.updateLaunchDate.nativeElement.value
    })
    .subscribe(() => { window.location.reload() })
  }
  deleteItem(){
    this.http.delete(environment.apiUrl + '/serie/' + this.itemId)
    .subscribe(() => { window.location.reload() })
  }
  createItem(){
    this.http.post(environment.apiUrl + '/series/',
    {
      title: this.createName.nativeElement.value,
      category: this.createCategory.nativeElement.value,
      synopsis: this.createSynopsis.nativeElement.value,
      seasons: this.createSeasons.nativeElement.value,
      rating: this.createRating.nativeElement.value,
      launch_date: this.createLaunchDate.nativeElement.value
    })
    .subscribe(() => { window.location.reload() })
  }
}