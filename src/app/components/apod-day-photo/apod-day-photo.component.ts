import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';
import { ApodDayPhotoService } from '../service/apod-day-photo.service';

@Component({
  selector: 'app-apod-day-photo',
  templateUrl: './apod-day-photo.component.html',
  styleUrls: ['./apod-day-photo.component.css']
})
export class ApodDayPhotoComponent implements OnInit {

  data: DayPhotoNasa[] = [];
  public form: FormGroup

  constructor(
    private service: ApodDayPhotoService,
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
    let valueButton = this.form.value
    this.service.findByDate(valueButton)
      .subscribe(data => {
        this.data = data;
        console.log(data)
      })
  }

  ngOnInit(): void {
  }
}
