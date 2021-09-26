import { NgModule } from '@angular/core';
import { ModelEditorComponent } from './model-editor/model-editor.component';
import { ModelsListComponent } from './models-list/models-list.component';
import { CommonModule } from "@angular/common";
import { viewsRouting } from "./pages.routing";

@NgModule({
  imports: [
      CommonModule,
      viewsRouting
  ],
  declarations: [
    ModelsListComponent,
    ModelEditorComponent
  ]
})
export class PagesModule {
}
