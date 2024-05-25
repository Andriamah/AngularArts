import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [  FormsModule,
    CommonModule,
    InscriptionComponent,
    RouterModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  @Input() heading: string | undefined;
  @Input() fields: string[] | undefined;
  @Input() submitLabel: string | undefined;

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
