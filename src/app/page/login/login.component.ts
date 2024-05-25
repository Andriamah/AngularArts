import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InscriptionComponent } from '../../component/inscription/inscription.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [
        FormsModule,
        CommonModule,
        InscriptionComponent,
        RouterModule
    ]
})
export class LoginComponent {
  switched = false;
  isSignUp: boolean = false;

  toggleSignup() {
    console.log("haha")
    this.isSignUp = !this.isSignUp;

  }

}
