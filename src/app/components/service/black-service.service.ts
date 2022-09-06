import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';
import { blackHoles } from 'src/app/model/blackHole';

@Injectable({
  providedIn: 'root'
})
export class BlackServiceService {

  private baseUrl = `http://localhost:8080`
  private readonly API = `/project/api/blackHoles`

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<blackHoles[]>(this.baseUrl+this.API)
      .pipe(
        first(),
        delay(1200),
        tap(galaxiasList => console.log(galaxiasList))
      )
  }

  findById(id: any): Observable<blackHoles> {
    return this.httpClient.get<blackHoles>(`${this.API}${id}`)
  }
}
