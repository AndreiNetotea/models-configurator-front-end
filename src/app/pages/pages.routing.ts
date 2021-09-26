import { ModelEditorComponent } from './model-editor/model-editor.component';
import { ModelsListComponent } from './models-list/models-list.component';
import { Routes, RouterModule } from '@angular/router';


const pagesRoutes: Routes = [
  {
      path: 'list',
      component: ModelsListComponent
  },
  {
      path: 'list/:modelId',
      component: ModelEditorComponent
  }
]

export const viewsRouting: any = RouterModule.forChild(pagesRoutes);
