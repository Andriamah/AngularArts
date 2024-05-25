import { Injectable } from '@angular/core';
import { Commentaire } from '../model/Commentaire';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  commentaires: Commentaire[] = [
    {
      user: 'Alice',
      comment: 'J\'adore la subtilité des couleurs dans cette peinture!'
    },
    {
      user: 'Bob',
      comment: 'Cette sculpture est vraiment captivante, elle dégage une émotion incroyable.'
    },
    {
      user: 'Claire',
      comment: 'L\'utilisation de la lumière et de l\'ombre dans cette photographie est brillante.'
    },
    {
      user: 'David',
      comment: 'Cette installation artistique me fait réfléchir sur la nature de l\'existence.'
    },
    {
      user: 'Emma',
      comment: 'Les détails dans cette œuvre sont époustouflants, chaque fois que je la regarde, je découvre quelque chose de nouveau.'
    },
    {
      user: 'Francis',
      comment: 'L\'artiste a su capturer l\'essence même de la beauté dans cette composition.'
    },
    {
      user: 'Grace',
      comment: 'Cette pièce d\'art moderne pousse vraiment les limites de la créativité.'
    },
    {
      user: 'Henry',
      comment: 'Je suis fasciné par l\'originalité de cette œuvre, c\'est vraiment unique.'
    },
    {
      user: 'Isabelle',
      comment: 'Ces dessins au trait fin sont à la fois simples et profonds.'
    },
    {
      user: 'Jack',
      comment: 'Cette série de peintures abstraites évoque tellement d\'émotions différentes.'
    }
  ];
  
  constructor() { }

  getCommentaires(): Observable<Commentaire[]> {
    return of(this.commentaires);
  }
}
