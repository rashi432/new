import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  save1(d): any {
    return this.http.post('http://localhost:3000/save2', d);
  }

  secret1(d): any {
    return this.http.post('http://localhost:3000/secret2', d);
  }
}
