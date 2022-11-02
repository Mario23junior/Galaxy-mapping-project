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
    let valueConvert = convert.slice(9, 19)

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
