import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';

const routes: Routes = [
   {  path : '' , redirectTo : 'notes' , pathMatch : 'full'},
   {  path : 'notes', component : NotesComponent },
   {  path : 'notes/edit/:id' , component : EditNotesComponent }



];




@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:
  [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
