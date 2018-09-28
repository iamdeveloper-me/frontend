import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: Http) { 

  }
  getAllCompany(){
   return this.http.get("http://192.168.0.115:8080/api/company")
  }
}
