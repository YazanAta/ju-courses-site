import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { QualityExamsComponent } from './pages/quality-exams/quality-exams.component';
import { UpcomingCoursesComponent } from './pages/upcoming-courses/upcoming-courses.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';

const routes: Routes = [
  {path: "Home", component:HomeComponent},
  {path: "Admin-Home", component:HomeAdminComponent},
  {path: "quality-exams", component:QualityExamsComponent},
  {path: "upcoming-courses", component:UpcomingCoursesComponent},
  {path: "", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
