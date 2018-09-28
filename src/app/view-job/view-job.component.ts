import { Http } from '@angular/http';
import { JobServicesService } from './../services/job-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  job_data = []
  loader:boolean = true
  constructor(public _service: JobServicesService,public http: Http) { }

  ngOnInit(){
    this._service.getAllDeal().subscribe((data)=>{
      console.log(data)
      debugger
      this.loader =false
      this.job_data = data.json().data.result
      
    })
  }
  
}
