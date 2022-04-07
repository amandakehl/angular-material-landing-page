import { FormModel } from './../components/form/form.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  saveInfos(info: FormModel): Observable<any> {
    return this.http.post("http://localhost:3000/contact-us", info)
  }
}
