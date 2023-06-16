import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UpcomingCoursesComponent } from './pages/upcoming-courses/upcoming-courses.component';
import { QualityExamsComponent } from './pages/quality-exams/quality-exams.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UpcomingCoursesComponent,
    QualityExamsComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PowerBIEmbedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
