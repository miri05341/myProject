import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrolComponent } from './pages/enrol/enrol.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',redirectTo:'enrol',pathMatch:'full'},
    { path: 'enrol', loadChildren:() => import('./pages/enrol/enrol.module').then(m => m.EnrolModule)  },
    { path: 'instructions', loadChildren:() => import('./pages/instructions/instructions.module').then(m => m.InstructionsModule), },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
