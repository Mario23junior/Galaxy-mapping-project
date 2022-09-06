import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';
import { ApodDayPhotoService } from '../service/apod-day-photo.service';

@Component({
  selector: 'app-apod-day-photo',
  templateUrl: './apod-day-photo.component.html',
  styleUrls: ['./apod-day-photo.component.css']
})
export class ApodDayPhotoComponent implements OnInit {

  data: DayPhotoNasa[] = [];

  constructor(
    private service: ApodDayPhotoService,
    private http: HttpClient,
    private router: Router

  ) {
    this.service.listAllPhotoDay()
      .subscribe(data => {
        this.data = data;
        console.log(data)
      })
  }

  ngOnInit(): void {

  }

}
