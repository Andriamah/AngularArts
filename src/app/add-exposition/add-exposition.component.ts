import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-exposition',
  standalone: true,
  imports: [CommonModule,
  FormsModule],
  templateUrl: './add-exposition.component.html',
  styleUrl: './add-exposition.component.css'
})
export class AddExpositionComponent {
titre: any;
date: any;
description: any;

}
