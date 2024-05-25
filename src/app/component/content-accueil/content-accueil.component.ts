import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Artiste } from '../../model/Artiste';
import { ArtisteService } from '../../service/artiste.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-content-accueil',
  standalone: true,
  imports: [CommonModule,
    RouterLink
  ],
  templateUrl: './content-accueil.component.html',
  styleUrl: './content-accueil.component.scss'
})
export class ContentAccueilComponent implements OnInit {

  artistes: Artiste[] = [];
  constructor(private artisteService: ArtisteService) { }


  ngOnInit() {
    this.artisteService.getTopArtistes().subscribe(
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
  }
}
