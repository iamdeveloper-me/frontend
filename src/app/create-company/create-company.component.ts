import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  error_tag:string;
  error_:string;

  constructor(public http: Http,public not_service:NotificationsService) { }

  ngOnInit() {
  }
  onSubmit(event : any){
    console.log(event)
   const data = {
     "company_id": '123456776854',
      "company_name" : event.target[0].value,
      "tags" : event.target[1].value,
      
    }
    this.http.post('http://192.168.0.115:8080/api/company/',data).subscribe((data)=>{
      if(data.json().data.responseCode == '200'){
        this.not_service.success('Company Created!', '', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
        setTimeout(() => {
          window.location.reload();
        }, 3400);
      }else{
        this.error_tag = data.json().data.error.tags
        // this.error_name = data.json().data.error.company_name

        this.not_service.error('Error !', data.json().data.error.tags, {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
      }
    })
  }
  reload(){
    window.location.reload();
  }
}
