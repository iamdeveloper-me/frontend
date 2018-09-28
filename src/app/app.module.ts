import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {MatAutocompleteModule, MatAutocomplete} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  // MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  // MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  // MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';

import { CreateJobComponent } from './create-job/create-job.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';


import { RouterModule, Routes } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { EditJobComponent } from './edit-job/edit-job.component';

// import { MdInputModule, MdButtonModule } from '@angular/material';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'job', component: CreateJobComponent },
  { path: 'view-job', component: ViewJobComponent },
  { path: 'create-company', component: CreateCompanyComponent },
  { path: 'edit-job/:id', component: EditJobComponent },
  { path: 'jobtable', component: ViewJobComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    CreateJobComponent,
    DashboardComponent,
    CreateContactComponent,
    ViewJobComponent,
    CreateCompanyComponent,
    EditJobComponent
  ],
  imports: [
  
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    HttpModule,
    RouterModule.forRoot(routes),
    // DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [   
    RouterModule ,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
})
export class AppModule { }
