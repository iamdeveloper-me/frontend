import { JobServicesService } from './../services/job-services.service';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';



// import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
export interface State {
  company_id: string;
  company_name: string;
  // population: string;
}
export interface StateE {
  company_id: string;
  company_name: string;
  // population: string;
}
export interface StateC {
  company_id: string;
  company_name: string;
  // population: string;
}
export interface StateA {
  company_id: string;
  company_name: string;
  // population: string;
}

export class Job {
  constructor(
    public job_name?: string,
    public job_location?: string,
    public owner_name?: string,
    // public owner_id?: string,
    public owner_location?: string,
    public engineer_name?: string,
    public architect?: string,
    public contractor_customer?: string,
    public contact_id_for_job?: "string",
    
  ) {}
}
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  job = new Job();
  loader:boolean = true

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  
  stateCtrlE = new FormControl();
  filteredStatesE: Observable<StateE[]>;


  stateCtrlC = new FormControl();
  filteredStatesC: Observable<StateC[]>;

  stateCtrlA = new FormControl();
  filteredStatesA: Observable<StateA[]>;

  states: State[]
  statesE: StateE[] 
  statesC: StateC[] 
  statesA: StateA[]

  constructor(public service: CommonService,public not_service: NotificationsService ,public _route: ActivatedRoute,public _service : JobServicesService,public http: Http) { }

  ngOnInit() {

    this.service.getAllCompany().subscribe((data)=>{
      console.log(data.json().data.result)
      this.states = data.json().data.result.owner_data
      this.statesE = data.json().data.result.eng_data
      this.statesC = data.json().data.result.contractor_data
      this.statesA = data.json().data.result.arc_data
      
      
      this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
      this.filteredStatesE = this.stateCtrlE.valueChanges
      .pipe(
        startWith(''),
        map(statee => statee ? this._filterStatesE(statee) : this.statesE.slice())
      );
      this.filteredStatesC = this.stateCtrlC.valueChanges
      .pipe(
        startWith(''),
        map(statec => statec ? this._filterStatesC(statec) : this.statesC.slice())
      );
      this.filteredStatesA = this.stateCtrlA.valueChanges
      .pipe(
        startWith(''),
        map(statea => statea ? this._filterStates(statea) : this.statesA.slice())
      );


    this._route.params.subscribe(params => {
      let id = +params['id'];
      console.log(id)
this._service.getSingleJob(id).subscribe((data)=>{
  console.log(data.json().data.result) ;

  this.job = data.json().data.result;
  this.loader = false

})

    })
  })

}
private _filterStates(value: string): State[] {
  const filterValue = value.toLowerCase();

  return this.states.filter(state => state.company_name.toLowerCase().indexOf(filterValue) === 0);
}
private _filterStatesE(value: string): StateE[] {
  const filterValueE = value.toLowerCase();

  return this.statesE.filter(statee => statee.company_name.toLowerCase().indexOf(filterValueE) === 0);
}
private _filterStatesC(value: string): StateE[] {
  const filterValueC = value.toLowerCase();

  return this.statesC.filter(statec => statec.company_name.toLowerCase().indexOf(filterValueC) === 0);
}
private _filterStatesA(value: string): StateA[] {
  const filterValueA = value.toLowerCase();

  return this.statesA.filter(statea => statea.company_name.toLowerCase().indexOf(filterValueA) === 0);
}
  
  onSubmit(event: any){
    // this.loader = true
console.log(event.target[0].value)
const data = {
     "job_name" : event.target[1].value,
     "job_location": event.target[2].value,
     "owner_name": event.target[3].value,
     "owner_location": event.target[4].value,
     "engineer_name": event.target[5].value,
     "architect": event.target[6].value,
     "contractor_customer": event.target[7].value,
     "contact_id_for_job": event.target[8].value,
}
this.http.put("http://192.168.0.115:8080/api/job/"+event.target[0].value,data).subscribe((data)=>{
  console.log(data.json().data.responseCode)
      if(data.json().data.responseCode == '200'){
        // this.loader = false
        this.not_service.success('Job Created!', '', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
        setTimeout(() => {
          window.location.reload();
        }, 3400);
      }else{
        this.not_service.error('Error !', '', {
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
