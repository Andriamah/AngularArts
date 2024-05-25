import { Component, OnInit } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router'; // Modifié ici
import { CalendarModule } from 'primeng/calendar';
import { Collection } from '../../model/Collection';
import { CollectionService } from '../../service/collection.service';
import { Artiste } from '../../model/Artiste';
import { ArtisteService } from '../../service/artiste.service';

@Component({
  selector: 'app-liste-collection-artiste',
  standalone: true,
  imports: [
    InplaceModule,
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    TreeSelectModule,
    FormsModule,
    RouterLink,
    CalendarModule
  ],
  templateUrl: './liste-collection-artiste.component.html',
  styleUrls: ['./liste-collection-artiste.component.css'] // Correction ici
})
export class ListeCollectionArtisteComponent implements OnInit {

  pdc: string = 'assets/images/pdc.jpg';
  selectedDateDebut: Date | undefined;
  selectedDateFin: Date | undefined;
  artiste!: Artiste;

  collections: Collection[] = [];
  nom: string | null = null; // Initialisation à null

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute,
    private artisteService : ArtisteService

  ) {}

  ngOnInit() {
    // Utilisation de l'ActivatedRoute pour obtenir le paramètre de route
    this.nom = this.route.snapshot.paramMap.get('nom');
    console.log('this is the name '+this.nom)
    

    if (this.nom) {
      this.collectionService.getArtisteCollection(this.nom).subscribe(
        (lesCollections: Collection[]) => {
          // Traitement à effectuer lorsque la réponse est reçue avec succès
          console.log('lesCollections récupérés avec succès : ', lesCollections);
          // Vous pouvez affecter les assignments à votre variable assignments ici
          this.collections = lesCollections;
        },
        (error) => {
          // Gestion des erreurs
          console.error('Une erreur s\'est produite lors de la récupération des lesCollections : ', error);
        }
      );

      this.artisteService.getOneArtiste(this.nom).subscribe(
        (lartiste: Artiste | undefined) => {
          if (lartiste) {
            console.log('lartiste récupérée avec succès : ', lartiste);
            this.artiste = lartiste;
          } else {
            console.log('Aucune collection trouvée pour le nom : ', this.nom);
          }
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération de la collection : ', error);
        }
      );
    }
  }

  validerSelection(event: any): void {
    // Vous pouvez ajouter ici le code pour traiter les sélections
    console.log('Début:', this.selectedDateDebut);
    console.log('Fin:', this.selectedDateFin);
    // Ajoutez d'autres actions nécessaires, telles que l'envoi de données au serveur ou la navigation vers une autre page
  }
}
