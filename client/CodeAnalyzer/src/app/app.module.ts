import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {ReactiveFormsModule} from '@angular/forms';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSortModule, 
  MatInputModule, 
  MatPaginatorModule, 
  MatSidenavModule, 
  MatTableModule, 
  MatIconModule, 
  MatFormFieldModule, 
  MatListModule, 
  MatCardModule,
  MatSelectModule,
  MatOptionModule , MatCheckboxModule,MatGridListModule, MatSpinner, MatProgressSpinnerModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UploadCodeComponent } from './upload-code/upload-code.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadCodeComponent,
    CandidateListComponent,
    SidebarMenuComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatCheckboxModule,MatGridListModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
