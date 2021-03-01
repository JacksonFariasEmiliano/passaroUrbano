import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: RestaurantesComponent},
  { path: '', component: DiversaoComponent},
]
