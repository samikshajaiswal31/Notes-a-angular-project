import { Injectable } from '@angular/core';
import { Notes } from './notes';
import { NOTES } from './notes-data';

@Injectable()
export class NotesService {
  private notes : Notes[] = NOTES;

  constructor() { }
  getValues(id : number): Notes
  {
    for(var i = 0; i<  this.notes.length;i++)
    {
      if (this.notes[i].id === id)
         return this.notes[i];
    }
  }
  saveValues(content: string , id: number): void
  {
this.notes[id-1].content = content;
  }

}
