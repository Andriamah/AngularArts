import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { Collection } from '../model/Collection';
import { CollectionService } from '../service/collection.service';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../model/Commentaire';
import { CommentaireService } from '../service/commentaire.service';
import { ArtisteService } from '../service/artiste.service';
import { Artiste } from '../model/Artiste';

@Component({
  selector: 'app-detail-collection',
  standalone: true,
  imports: [
    ImageModule,
    RatingModule,
    CommonModule,
    FormsModule,
    DialogModule,
    AvatarModule
  ],
  templateUrl: './detail-collection.component.html',
  styleUrl: './detail-collection.component.css'
})
export class DetailCollectionComponent implements OnInit {
  value: number = 0;
  adore: Boolean = false;
  nom: string | null = null;
  nomartiste: string | null = null; 
 


  newComment: string = '';
  comments: Commentaire[] = [];
  collection !: Collection;

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute ,
    private commentaireService : CommentaireService,
  ) {}
  ngOnInit() {
    this.nom = this.route.snapshot.paramMap.get('nom');
    this.nomartiste = this.route.snapshot.paramMap.get('nomArtiste');
    console.log('the name '+this.nom +'et '+this.nomartiste) 
    if (this.nom) {
      this.collectionService.getOneCollection(this.nom).subscribe(
        (collection: Collection | undefined) => {
          if (collection) {
            console.log('Collection récupérée avec succès : ', collection);
            this.collection = collection;
          } else {
            console.log('Aucune collection trouvée pour le nom : ', this.nom);
          }
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération de la collection : ', error);
        }
      );
    }
    

    this.commentaireService.getCommentaires().subscribe(
      (lesCommentaires: Commentaire[]) => {
        // Traitement à effectuer lorsque la réponse est reçue avec succès
        console.log('lesCommentaires récupérés avec succès : ', lesCommentaires);
        // Vous pouvez affecter les assignments à votre variable assignments ici
        this.comments = lesCommentaires;
      },
      (error) => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite lors de la récupération des lesCommentaires : ', error);
      }
    );
  }
  // Méthode pour ajouter un commentaire
  addNewComment() {
    if (this.newComment.trim() !== '') {
      this.newComment = ''; // Réinitialiser l'input
    }
  }
  addComment(comment: string) {
    // Logique pour ajouter le commentaire
  }
  onRateChanged(event: MouseEvent) {
    // Extraire la valeur de la note à partir de l'événement de clic
    const target = event.target as HTMLElement;
    const valueString = target.getAttribute('data-value');
    console.log("ctgfvubhujnk,l " + valueString)
    if (valueString) {
      this.value = parseInt(valueString, 10);
      console.log('Nouvelle valeur de la note : ', this.value);
    }
  }
  actionHeart() {
    let valueH = this.adore;
    if (valueH) {
      this.adore = false
    } else {
      this.adore = true

    }
  }
}
