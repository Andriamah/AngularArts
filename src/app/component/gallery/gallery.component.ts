import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,PaginatorModule,InputGroupModule,InputGroupAddonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  arts: any[] = [
    { id: 1, nom: 'Objet 1' },
    { id: 2, nom: 'Objet 2' },
    { id: 3, nom: 'Objet 3' },
    { id: 4, nom: 'Objet 4' },
    { id: 5, nom: 'Objet 5' },
    { id: 6, nom: 'Objet 6' },
  ];

  first: number = 0;
  rows: number = 10;

  onPageChange(event: PageEvent | any) {
      this.first = event.first;
      this.rows = event.rows;
  }
}
