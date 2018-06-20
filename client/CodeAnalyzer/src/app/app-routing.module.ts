import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UploadCodeComponent } from './upload-code/upload-code.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  //{ path: 'upload', component: UploadCodeComponent },
  { path: 'candidate-list', component: CandidateListComponent },
  { path: '**', redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
