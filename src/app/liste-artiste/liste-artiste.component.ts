import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms'; 
import  {RouterLink} from '@angular/router';
import { ArtisteService } from '../service/artiste.service';
import { Artiste } from '../model/Artiste';
import { TypeArtisteService } from '../service/type-artiste.service';
import { TypeArtiste } from '../model/TypeArtiste';
import { NoteService } from '../service/note.service';
import { Note } from '../model/note';

@Component({
  selector: 'app-liste-artiste',
  standalone: true,
  imports: [CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    TreeSelectModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './liste-artiste.component.html',
  styleUrl: './liste-artiste.component.css'
})
export class ListeArtisteComponent implements OnInit {
  constructor(private artisteService: ArtisteService,
              private typeArtisteService : TypeArtisteService,
              private noteService : NoteService) { }
  artistes: Artiste[] = [];

  
  selectedGenre: any;
  genres: any[] = [{ label: 'Homme', value: 'Homme' },
  { label: 'Femme', value: 'Femme' }];

  selectedType: any;
  typeArtistes: any[] = [];

  selectedPop: any; 
  popularites: any[] = [];


  ngOnInit() {
    this.artisteService.getArtistes().subscribe(
      (lesArtistes: Artiste[]) => {
        // Traitement à effectuer lorsque la réponse est reçue avec succès
        console.log('Artistes récupérés avec succès : ', lesArtistes);
        // Vous pouvez affecter les assignments à votre variable assignments ici
        this.artistes = lesArtistes;
      },
      (error) => { 
        // Gestion des erreurs
        console.error('Une erreur s\'est produite lors de la récupération des artistes : ', error);
      }
    );

    this.noteService.getListNote().subscribe(
      (lesNotes: Note[]) => {
        // Traitement à effectuer lorsque la réponse est reçue avec succès
        console.log('ListeNote récupérés avec succès : ', lesNotes);
        // Vous pouvez affecter les assignments à votre variable assignments ici
        this.popularites = lesNotes;
      },
      (error) => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite lors de la récupération des ListeNote : ', error);
      }
    );

    this.typeArtisteService.getTypeCategorie().subscribe(
      (lesTypes: TypeArtiste[]) => {
        // Traitement à effectuer lorsque la réponse est reçue avec succès
        console.log('TypeArtiste récupérés avec succès : ', lesTypes);
        // Vous pouvez affecter les assignments à votre variable assignments ici
        this.typeArtistes = lesTypes;
      },
      (error) => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite lors de la récupération des TypeArtiste : ', error);
      }
    );
  }

  validerSelection(event: any): void {
    // Vous pouvez ajouter ici le code pour traiter les sélections
    console.log('Type d\'artiste sélectionné :', this.selectedType);
    console.log('Genre sélectionné :', this.selectedGenre);
    console.log('Niveau de popularité sélectionné :', this.selectedPop);
    // Ajoutez d'autres actions nécessaires, telles que l'envoi de données au serveur ou la navigation vers une autre page
  }
}
