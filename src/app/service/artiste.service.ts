import { Injectable } from '@angular/core';
import { Artiste } from '../model/Artiste';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  artistes: Artiste[] = [
    new Artiste(
      'Leonardo da Vinci',
      'Leonardo',
      new Date(1452, 4, 15),
      new Date(1519, 4, 2),
      'Italien',
      'Peintre, sculpteur, architecte et scientifique de la Renaissance italienne.',
      20
    ),
    new Artiste(
      'Vincent van Gogh',
      'Van Gogh',
      new Date(1853, 3, 30),
      new Date(1890, 6, 29),
      'Néerlandais',
      'Peintre post-impressionniste connu pour ses œuvres expressives.',
      30
    ),
    new Artiste(
      'Pablo Picasso',
      'Picasso',
      new Date(1881, 10, 25),
      new Date(1973, 4, 8),
      'Espagnol',
      'Peintre et sculpteur majeur du 20e siècle, co-fondateur du cubisme.',
      50
    ),
    new Artiste(
      'Claude Monet',
      'Monet',
      new Date(1840, 11, 14),
      new Date(1926, 12, 5),
      'Français',
      'Fondateur du mouvement impressionniste, célèbre pour ses séries de peintures des nymphéas.',
      25
    ),
    new Artiste(
      'Georgia O\'Keeffe',
      'O\'Keeffe',
      new Date(1887, 11, 15),
      new Date(1986, 3, 6),
      'Américaine',
      'Peintre moderne connue pour ses peintures de fleurs et paysages.',
      15
    ),
    new Artiste(
      'Michel-Ange',
      'Michel-Ange',
      new Date(1475, 2, 6),
      new Date(1564, 1, 18),
      'Italien',
      'Sculpteur, peintre, architecte et poète de la Renaissance, créateur de la statue de David et de la fresque de la Chapelle Sixtine.',
      40
    ),
    new Artiste(
      'Frida Kahlo',
      'Kahlo',
      new Date(1907, 6, 6),
      new Date(1954, 6, 13),
      'Mexicaine',
      'Artiste surréaliste connue pour ses autoportraits expressifs et sa lutte pour les droits des femmes.',
      20
    ),
    new Artiste(
      'Salvador Dalí',
      'Dalí',
      new Date(1904, 4, 11),
      new Date(1989, 0, 23),
      'Espagnol',
      'Peintre surréaliste connu pour ses œuvres extravagantes et ses montres molles.',
      30
    ),
    new Artiste(
      'Rembrandt',
      'Rembrandt',
      new Date(1606, 6, 15),
      new Date(1669, 10, 4),
      'Néerlandais',
      'Peintre et graveur baroque, considéré comme l\'un des plus grands artistes de tous les temps.',
      35
    ),
    new Artiste(
      'Andy Warhol',
      'Warhol',
      new Date(1928, 7, 6),
      new Date(1987, 1, 22),
      'Américain',
      'Artiste majeur du mouvement pop art, célèbre pour ses œuvres de sérigraphie et ses explorations de la culture de masse.',
      25
    ),
  ];
  constructor() { }

  getArtistes(): Observable<Artiste[]> {
    return of(this.artistes);
  }
  getTopArtistes(): Observable<Artiste[]> {
    return of(this.artistes).pipe(
      map(artistes => artistes.slice(0, 3)) // Ne prendre que les trois premiers artistes
    );
  }
  getOneArtiste(nom: string): Observable<Artiste | undefined> {
    const artiste = this.artistes.find(col => col.nom === nom);
    return of(artiste);
  }
}
