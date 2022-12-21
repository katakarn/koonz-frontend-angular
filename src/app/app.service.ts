import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Demo, DemoDetail, DemoMessage } from './demo';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = `http://localhost:8090/demo`
    constructor(private httpClient: HttpClient) { }

    getDemo(): Observable<Demo[]> {
        return this.httpClient
            .get<Demo[]>(this.apiUrl)
            .pipe(map((res) => res))
    }

    postDemo(demoDetail: DemoDetail): Observable<Demo> {
      return this.httpClient
          .post<Demo>(this.apiUrl, demoDetail)
          .pipe(map((res) => res))
  }

    deleteDemo(demo: Demo): Observable<DemoMessage> {
      return this.httpClient
          .delete<DemoMessage>(this.apiUrl+`/${demo.id}`)
          .pipe(map((res) => res))
  }
}
