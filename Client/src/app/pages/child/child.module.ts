import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...AngularMaterialModule
  ],
  exports:[
    ChildComponent
  ]
})
export class ChildModule { }
