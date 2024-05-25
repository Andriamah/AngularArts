import { Routes } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { LoginComponent } from './page/login/login.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ListeArtisteComponent } from './liste-artiste/liste-artiste.component';
import { ListeCollectionArtisteComponent } from './liste-artiste/liste-collection-artiste/liste-collection-artiste.component';
import { DetailCollectionComponent } from './detail-collection/detail-collection.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { AgendaExpositionComponent } from './agenda-exposition/agenda-exposition.component';
import { LiveExpositionComponent } from './live-exposition/live-exposition.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AddExpositionComponent } from './add-exposition/add-exposition.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'agenda', component: AgendaExpositionComponent },
  { path: 'listeArtiste', component: ListeArtisteComponent },
  {path:'collection/:nom',component:ListeCollectionArtisteComponent},
  {path:':nomArtiste/detail/:nom',component:DetailCollectionComponent},
  {path:'addCollection/:id',component:AddCollectionComponent},
  {path:'exposition/:id',component:LiveExpositionComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'expositions/add',component:AddExpositionComponent}
];
