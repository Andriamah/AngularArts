import { Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { ExpositionService } from '../service/exposition.service';
import { Exposition } from '../model/Exposition';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TypeArtiste } from '../model/TypeArtiste';
import { TypeArtisteService } from '../service/type-artiste.service';
import { DialogModule } from 'primeng/dialog';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-agenda-exposition',
  standalone: true,
  imports: [TimelineModule,
    CardModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    RouterLink],
  templateUrl: './agenda-exposition.component.html',
  styleUrl: './agenda-exposition.component.css'
})
export class AgendaExpositionComponent implements OnInit {
  exxpositions: Exposition[] = [];
  visible: boolean = false;

  events: any[] | undefined;
  date: any;
  eloo: any;
  selectedType: any;
  selectedDateDebut: any;
  selectedDateFin: any;
  typeArtistes: any[] = [];

  constructor(private expositionService: ExpositionService,
    private typeArtisteService: TypeArtisteService) { }

  showDialog() {
    this.visible = true;
    console.log("boboo")
  }
  ngOnInit(): void {
    this.expositionService.getListExpositionAVenir().subscribe(
      (lesExpoFutur: Exposition[]) => {
        // Traitement à effectuer lorsque la réponse est reçue avec succès
        console.log('exxpositions récupérés avec succès : ', lesExpoFutur);
        // Vous pouvez affecter les assignments à votre variable assignments ici
        this.exxpositions = lesExpoFutur;
      },
      (error) => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite lors de la récupération des exxpositions : ', error);
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

    // Ajoutez d'autres actions nécessaires, telles que l'envoi de données au serveur ou la navigation vers une autre page
  }

}
