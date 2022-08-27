import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Galaxias } from 'src/app/model/galaxias';

@Injectable({
  providedIn: 'root'
})
export class GalaxyServiceService {

  private readonly API = "/assets/bd.json"
  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Galaxias[]>(this.API);
  }
}
