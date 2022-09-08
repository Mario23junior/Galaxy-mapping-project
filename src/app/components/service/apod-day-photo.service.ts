import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, delay, first, lastValueFrom, Observable, tap } from 'rxjs';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ApodDayPhotoService {

  private urlBase = "http://localhost:8080";
  private parametros = "/project/api/photo/";
  private atribut = "date=";

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  findByDate(date: Observable<DayPhotoNasa[]>) {
    let convert = JSON.stringify(date)
    console.log(convert)
    let valueConvert = convert.slice(9,19)
    // let valueConvert = convert[9] + convert[10] + convert[11]
    //   + convert[12] + convert[13]
    //   + convert[14] + convert[15] + convert[16] + convert[17] + convert[18]

    const url = (this.urlBase + this.parametros + this.atribut + valueConvert)
    let request = this.http.get<DayPhotoNasa[]>(url)
    console.log(request)
    return request
      .pipe(
        catchError(error => {
          this.onError('Data incorreta por favor insira data antes da tada atual.')
          return ([])
        })
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

  onError(erroMesg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMesg
    });
  }

}
