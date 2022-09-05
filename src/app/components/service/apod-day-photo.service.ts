import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { DayPhotoNasa } from 'src/app/model/DayPhotoNasaBridey';

@Injectable({
  providedIn: 'root'
})
export class ApodDayPhotoService {

  private baseUrl = `http://localhost:8080`
  private readonly API = `/project/api/photo/date=`

  constructor(private httpClient: HttpClient) { }

   findByData(data: String):Observable<DayPhotoNasa> {
    return this.httpClient.get<DayPhotoNasa>(this.baseUrl+this.API+data)
  }
}
