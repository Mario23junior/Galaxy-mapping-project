import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';
import { ApodDayPhotoService } from '../service/apod-day-photo.service';
import { GalaxyServiceService } from '../service/galaxy-service.service';

@Component({
  selector: 'app-day-photo',
  templateUrl: './day-photo.component.html',
  styleUrls: ['./day-photo.component.css']
})
export class DayPhotoComponent implements OnInit {

  form: FormGroup

  constructor(
    private service:ApodDayPhotoService,
    private formBuild:FormBuilder
  ) {
    this.form = formBuild.group({
      date:[null]
    })
   }

  ngOnInit(): void {
  }

  consultDate(data:String){
     this.service.findByDate(data)
  }

}
