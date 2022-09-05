import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';
import { ApodDayPhotoService } from '../service/apod-day-photo.service';

@Component({
  selector: 'app-day-photo',
  templateUrl: './day-photo.component.html',
  styleUrls: ['./day-photo.component.css']
})
export class DayPhotoComponent implements OnInit {

  dataDatNasa :DayPhotoNasa = {
    date:''
  }

  constructor(private service: ApodDayPhotoService,private router:Router) { }

  crateRequicaoDate(date: String) {
    this.service.findByDate(date).subscribe(() => {
      this.router.navigate(['/fotoDay'])
    })
  }

  ngOnInit(): void {

  }

}
