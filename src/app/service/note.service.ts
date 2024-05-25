import { Injectable } from '@angular/core';
import { Note } from '../model/note';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[] = [
    {
      nom: "Acclame"
    },
    {
      nom: "Reconnu"
    }
    ,
    {
      nom: "Obscur"
    }
  ];
  constructor() { }
  getListNote(): Observable<Note[]> {
    return of(this.notes);
  }
}
