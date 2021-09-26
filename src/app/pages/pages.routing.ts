import { ModelEditorComponent } from './model-editor/model-editor.component';
import { ModelsListComponent } from './models-list/models-list.component';
import { Routes, RouterModule } from '@angular/router';


const pagesRoutes: Routes = [
  {
      path: 'list',
      component: ModelsListComponent
  },
  {
      path: 'list/:model-id',
      component: ModelEditorComponent
  }
]

export const viewsRouting: any = RouterModule.forChild(pagesRoutes);
