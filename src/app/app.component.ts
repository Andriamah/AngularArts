import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MenubarModule } from 'primeng/menubar';
// import { MenuItem } from 'primeng/api/menuitem';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
// import { Footer } from 'primeng/api';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, MenubarModule,CommonModule,FooterComponent]
})
export class AppComponent  {
  title = 'HIU-INTERNE-FRONT';


showHeader = true;

constructor(private router: Router) {
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: any) => {
    this.showHeader = event.urlAfterRedirects !== '/login';
    if (this.showHeader) {
      this.showHeader = event.urlAfterRedirects !== '/inscription';
    }
    console.log("dtgujnomkl;"+  this.showHeader)
  });
}
}
