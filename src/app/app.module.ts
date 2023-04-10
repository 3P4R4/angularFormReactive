import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSliderModule} from '@angular/material/slider'; 
import {MatButtonModule} from '@angular/material/button';
import { ValidacionesPersonalizadasComponent } from './validaciones-personalizadas/validaciones-personalizadas.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    ValidacionesPersonalizadasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSliderModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
