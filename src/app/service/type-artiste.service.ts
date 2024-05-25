import { Injectable } from '@angular/core';
import { TypeArtiste } from '../model/TypeArtiste';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class TypeArtisteService {
  typeartistes: TypeArtiste[] = [
    {
      nom: "Peintre"
    },
    {
      nom: "Chanteur"
    }
  ];
  constructor() { }
  getTypeCategorie(): Observable<TypeArtiste[]> {
    return of(this.typeartistes);
  }
}
