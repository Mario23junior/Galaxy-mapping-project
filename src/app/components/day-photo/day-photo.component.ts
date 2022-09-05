import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';

@Component({
  selector: 'app-day-photo',
  templateUrl: './day-photo.component.html',
  styleUrls: ['./day-photo.component.css']
})
export class DayPhotoComponent implements OnInit {

  constructor(
    private dayPhotoApod: Observable<DayPhotoNasa>
  ) {
    this.dayPhotoApod = dayPhotoApod
  }

  ngOnInit(): void {
  }

}
