import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes.service';
import { AppRoutingModule } from './/app-routing.module';
import { EditNotesComponent } from './edit-notes/edit-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    EditNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
