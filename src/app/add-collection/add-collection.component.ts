import { Component, OnInit } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';


interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-add-collection',
  standalone: true,
  imports: [
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    InputTextareaModule

  ],
  templateUrl: './add-collection.component.html',
  providers: [MessageService],
  styleUrl: './add-collection.component.css'
})
export class AddCollectionComponent implements OnInit {
  base64String: string | undefined;
  imageUrl: string | ArrayBuffer | null = null;

  selectedGenre: any;
  genres: any[] = [{ label: 'Homme', value: 'Homme' },
  { label: 'Femme', value: 'Femme' }];
  ingredient!: string;
  selectedType: any;
  typeArtistes: any[] = [];
  description:any;
  message:any;

  selectedPop: any;
  popularites: any[] = [];

  titre : any;
  date:any;
  style:any;

  ngOnInit(): void {
    // Ajoutez ici le code à exécuter lors de l'initialisation du composant
    // Par exemple, initialiser les données ou effectuer des appels HTTP
  }

  validerSelection(event: any): void {
    // Vous pouvez ajouter ici le code pour traiter les sélections
    console.log('Type d\'artiste sélectionné :', this.selectedType);
    console.log('Genre sélectionné :', this.selectedGenre);
    console.log('Niveau de popularité sélectionné :', this.selectedPop);
    // Ajoutez d'autres actions nécessaires, telles que l'envoi de données au serveur ou la navigation vers une autre page
  }

  constructor(private messageService: MessageService) {}

  onUpload(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
        console.log('Nom du fichier:', file.name);
        console.log('Type de fichier:', file.type);
        console.log('Taille du fichier:', file.size);

        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
            const image = new Image();
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!context) {
                    console.error('Impossible de récupérer le contexte du canvas');
                    return;
                }
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                
                // Obtenir les données d'image du canvas
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const dominantColor = this.getDominantColor(imageData);
                console.log('Couleur dominante:', dominantColor);
            };
            image.src = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
}

getDominantColor(imageData: ImageData): string {
    // Analyser les données d'image pour déterminer la couleur dominante
    // Vous pouvez utiliser différentes techniques pour analyser les données d'image et déterminer la couleur dominante
    // Par exemple, vous pouvez parcourir tous les pixels de l'image et compter les occurrences de chaque couleur
    // Ou utiliser des algorithmes de clustering pour regrouper les couleurs similaires et trouver la couleur dominante
    
    // Pour cet exemple, nous retournons simplement une couleur aléatoire
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


}
