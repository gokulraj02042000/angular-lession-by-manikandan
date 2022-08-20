import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  sum(a: number, b: number) {
    return a + b;
  }

  getData() {
    return this.http.get('https://run.mocky.io/v3/8746c13d-931c-48ee-b33d-93d048b6f6fd')
  }
}
