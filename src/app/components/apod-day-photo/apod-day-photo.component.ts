import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  photoDay: [] = []

  public form: FormGroup

  constructor(
    private service: ApodDayPhotoService,
    private http: HttpClient,
    private router: Router,
    public formBuild: FormBuilder, 

  ) {
    this.form = this.formBuild.group({
      date:[null]
    }),
    this.service.listAllPhotoDay()
      .subscribe(data => {
        this.data = data;
        console.log(data)
      })
  }

  ConsultForDatePhoto(){
    //  this.service.findByDate('date')
    //  .subscribe(date => {
    //    this.photoDay = date
    //  })
     
  }


  ngOnInit(): void {
  }
}
