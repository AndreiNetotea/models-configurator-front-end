import { ConfiguratorService } from './../../core/services/configurator/configuraor.service';
import { Component } from '@angular/core';

@Component({
  selector: 'models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['models-list.component.scss']
})
export class ModelsListComponent {


  constructor(public configuratirService: ConfiguratorService) {}

  public modelsList$ = this.configuratirService.getConfiguratorsList();
}
