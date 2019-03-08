import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SerieService } from './serie.service';

@Injectable({ providedIn: 'root'})
export class SerieResolver implements Resolve<Observable<any[]>>{

    public paginasComseries: any[] = [];
    public series: any;

    constructor(private service: SerieService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
        return this.service.SeriesPorPaginas("shows/1");
    }
}