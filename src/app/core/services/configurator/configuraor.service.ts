import { ConfiguratorInterface } from './../../interfaces/configurator/configurator.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfiguratorService {
  private backendUrl = 'http://localhost:3000/configurators'
  constructor(private http: HttpClient) {}

  public getConfiguratorsList(): Observable<ConfiguratorInterface[]> {
    return this.http.get<ConfiguratorInterface[]>(this.backendUrl);
  }

  public getConfigurator(id: string): Observable<ConfiguratorInterface[]> {
    return this.http.get<ConfiguratorInterface[]>(this.backendUrl + '/' + id);
  }

}
