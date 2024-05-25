import { GalleryComponent } from './../../component/gallery/gallery.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { HeaderImageBackgroundComponent } from "../../component/header-image-background/header-image-background.component";
import { ContentAccueilComponent } from "../../component/content-accueil/content-accueil.component";

@Component({
    selector: 'app-accueil',
    standalone: true,
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.scss',
    imports: [CardModule, CommonModule, HeaderImageBackgroundComponent, ContentAccueilComponent,GalleryComponent]
})
export class AccueilComponent {

}
