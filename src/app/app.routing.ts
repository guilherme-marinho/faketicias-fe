import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListaComidasComponent } from './lista-comidas/lista-comidas.component';
import { HomeComponent } from './home/home.component';
import { Routes, ActivatedRoute } from '@angular/router';


export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'lista-comidas', component: ListaComidasComponent},
    { path: '**', component: PagenotfoundComponent}
    
]

