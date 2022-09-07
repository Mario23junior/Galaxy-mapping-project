import { HttpClient } from '@angular/common/http';
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
  photoDay: any

  public form: FormGroup

  constructor(
    private service: ApodDayPhotoService,
    private http: HttpClient,
    private router: Router,
    public formBuild: FormBuilder,

  ) {
    this.form = this.formBuild.group({
      date: [null]
    }),
      this.service.listAllPhotoDay()
        .subscribe(data => {
          this.data = data;
          console.log(data)
        })
  }

  ConsultForDatePhoto() {
    let convert = JSON.stringify(this.form.value)
    this.service.findByDate(convert[9] + convert[10] + convert[11]
      + convert[12] + convert[13]
      + convert[14] + convert[15] + convert[16] + convert[17] + convert[18])
      .subscribe(data => {
        this.photoDay = data;
        console.log(data)
      })
  }

  ngOnInit(): void {
  }
}
