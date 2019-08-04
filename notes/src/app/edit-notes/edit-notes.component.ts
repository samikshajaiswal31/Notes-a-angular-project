import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '../notes';
@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {
private currentNote: Notes;
private currentNoteId : number;
  constructor(private notesservice : NotesService
  , private routes : ActivatedRoute) { }

  ngOnInit() {
    this.getValues();
  }
  getValues (): void
  {
    this.currentNoteId = parseInt(this.routes.snapshot.paramMap.get('id'));

    this.currentNote = this.notesservice.getValues(this.currentNoteId);

  }
  saveValues(content:string){
    this.notesservice.saveValues(content,this.currentNoteId);
  }
}
