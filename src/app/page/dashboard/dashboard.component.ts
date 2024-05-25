import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Collection } from '../../model/Collection';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CollectionService } from '../../service/collection.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonModule,
    RouterLink,
    CarouselModule,
  FormsModule,
CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(private collectionService : CollectionService){}
  topCollections: Collection[] = [];
  collectionsNonPublie: Collection[] = [];

  ngOnInit() {
    this.collectionService.getTopCollection().subscribe(
      (lesCollections: Collection[]) => {
        // Traitement à effectuer lorsque la réponse est reçue avec succès
        console.log('lesCollections récupérés avec succès : ', lesCollections);
        // Vous pouvez affecter les assignments à votre variable assignments ici
        this.topCollections = lesCollections;
      },
      (error) => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite lors de la récupération des lesCollections : ', error);
      }
    );
    this.collectionService.getCollectionNonPublie().subscribe(
      (lesCollections: Collection[]) => {
        // Traitement à effectuer lorsque la réponse est reçue avec succès
        console.log('lesCollections récupérés avec succès : ', lesCollections);
        // Vous pouvez affecter les assignments à votre variable assignments ici
        this.collectionsNonPublie = lesCollections;
      },
      (error) => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite lors de la récupération des lesCollections : ', error);
      }
    );
  }
  



}
