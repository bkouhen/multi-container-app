import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AppService {

  constructor(private http: HttpClient) {}

  fetchValues() {
    return this.http.get<any>('/api/values/current');
  }

  fetchIndexes() {
    return this.http.get<any>('/api/values/all');
  }

  submitIndex(data: {index: number}) {
    return this.http.post<any>('/api/values', data);
  }

}
