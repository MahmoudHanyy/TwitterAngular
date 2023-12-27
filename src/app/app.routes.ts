import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // { path: '', component: NavbarComponent, },
    { path: 'home', component: HomeComponent, },
];
