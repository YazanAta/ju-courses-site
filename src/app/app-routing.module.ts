import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { QualityExamsComponent } from './pages/quality-exams/quality-exams.component';
import { UpcomingCoursesComponent } from './pages/upcoming-courses/upcoming-courses.component';

const routes: Routes = [
  {path: "Home", component:HomeComponent},
  {path: "quality-exams", component:QualityExamsComponent},
  {path: "upcoming-courses", component:UpcomingCoursesComponent},
  {path: "", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
