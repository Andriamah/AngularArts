import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

interface Image {
  src: string;
  alt: string;
  rotation: number;
  top: number;
  left: number;
}

@Component({
  selector: 'app-live-exposition',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  templateUrl: './live-exposition.component.html',
  styleUrls: ['./live-exposition.component.css']
})
export class LiveExpositionComponent implements OnInit {
  images: Image[] = [
    { src: 'assets/images/img1.jpg', alt: 'Image 1', rotation: 0, top: 0, left: 0 },
    { src: 'assets/images/img2.jpg', alt: 'Image 2', rotation: 0, top: 0, left: 0 },
    { src: 'assets/images/oe.jpg', alt: 'Image 3', rotation: 0, top: 0, left: 0 }
  ];
  currentImageIndex = 0;
  intervalId: any;
  timeRemaining: number = 10; 
  prix: number = 0;
  prix_prop: number = 0;
  currentIndex = 0;

  ngOnInit(): void {
    this.images.forEach(image => {
      image.rotation = Math.random() * 40 - 20;
      image.top = Math.random() * 80;
      image.left = Math.random() * 80;
    });

    this.showNextImage();
  }

  showNextImage(): void {
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.showNextImage();
    }, 2000);
  }
}
