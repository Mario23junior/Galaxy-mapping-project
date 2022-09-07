import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, lastValueFrom, Observable, tap } from 'rxjs';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';

@Injectable({
  providedIn: 'root'
})
export class ApodDayPhotoService {

  private urlBase = "http://localhost:8080";
  private parametros = "/project/api/photo/";
  private atribut = "date=";

  constructor(
    private http: HttpClient
  ) { }

  findByDate(date: string) {
    let convert = JSON.stringify(date)
    let returUnic = convert[9] + convert[10] + convert[11]
      + convert[12] + convert[13]
      + convert[14] + convert[15] + convert[16] + convert[17] + convert[18]
    const url = (this.urlBase + this.parametros + this.atribut + returUnic)
    console.log(url)
    return this.http.get<DayPhotoNasa>(url)
      .pipe(
        first(),
        tap(day => console.log(day))
      )
  }


  listAllPhotoDay() {
    const url = this.urlBase + this.parametros
    return this.http.get<DayPhotoNasa[]>(url)
      .pipe(
        first(),
        tap(dayPhoto => console.log(dayPhoto))
      )
  }

}
