import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';

@Injectable({
  providedIn: 'root'
})
export class ApodDayPhotoService {

  private urlBase = "http://localhost:8080";
  private parametros = "/project/api/photo/";

  constructor(
    private http:HttpClient
  ) { }
  
  listAllPhotoDay() {
    return this.http.get<DayPhotoNasa[]>(this.urlBase+this.parametros)
      .pipe(
        first(),
         tap(dayPhoto => console.log(dayPhoto))
      )
  }
}
