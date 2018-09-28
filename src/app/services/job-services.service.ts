import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class JobServicesService {

  constructor(public http: Http) { 

  }
  getAllDeal(){
    return this.http.get("http://192.168.0.115:8080/api/job")
  }
  getSingleJob(id){
    return this.http.get("http://192.168.0.115:8080/api/job/"+id)
  }
}
