import { Injectable } from '@angular/core';
import { Exposition } from '../model/Exposition';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ExpositionService {
  expositions : Exposition[] = [
    { titre: 'Exposition 1', date_rdv: new Date('2024-03-20') },
    { titre: 'Exposition 2', date_rdv: new Date('2024-04-15') },
    { titre: 'Exposition 3', date_rdv: new Date('2024-05-10') }
  ];

  constructor() { }
  getListExpositionAVenir(): Observable<Exposition[]> {
    return of(this.expositions);
  }
}
