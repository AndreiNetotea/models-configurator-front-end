import { ConfiguratorInterface } from './../../core/interfaces/configurator/configurator.interface';
import { ConfiguratorService } from './../../core/services/configurator/configuraor.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMapTo } from "rxjs/operators";

@Component({
  selector: 'models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['models-list.component.scss']
})
export class ModelsListComponent {
  event$ = new BehaviorSubject(true);

  public modelsList$ = this.event$.pipe(
    switchMapTo(this.configuratirService.getConfiguratorsList())
  );

  constructor(public configuratirService: ConfiguratorService) {}


  public deleteModel(model: ConfiguratorInterface): void {
    this.configuratirService.deleteConfigurator(model._id).subscribe(() => {
      alert('Model ' + model.name + ' was deleted');
      this.event$.next(true);
    });
  }
}
