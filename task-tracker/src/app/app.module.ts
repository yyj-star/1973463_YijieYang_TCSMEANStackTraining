import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { MyService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatTableModule
    

  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
