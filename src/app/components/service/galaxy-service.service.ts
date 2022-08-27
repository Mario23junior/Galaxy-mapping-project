import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, take, tap } from 'rxjs';
import { Galaxias } from 'src/app/model/galaxias';

@Injectable({
  providedIn: 'root'
})
export class GalaxyServiceService {
  
  private host:string = "http://localhost:8080"
  private readonly API = `${this.host}/project/api/galaxy/`

  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Galaxias[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(galaxiasList => console.log(galaxiasList))
    )
  }
}
