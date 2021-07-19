import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolComponent } from './enrol.component';
import { ChildModule } from '../child/child.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { AngularMaterialModule } from 'src/app/material.module';
import { EnumToValuePipe } from './pipe/enum-to-value.pipe';

const routes:Routes=[{
  path: '', component:EnrolComponent
}]



@NgModule({
  declarations: [
    EnrolComponent,
    EnumToValuePipe
  ],
  imports: [
    CommonModule,
    ChildModule,
    ...AngularMaterialModule,
     FormsModule,
     ReactiveFormsModule,
     RouterModule.forChild(routes),  
  ]
})
export class EnrolModule { }
