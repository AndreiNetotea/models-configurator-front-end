import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
  },
  {
      path: '**',
      component: NotFoundComponent
  }
];

