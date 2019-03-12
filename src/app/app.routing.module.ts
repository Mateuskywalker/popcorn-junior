import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SeriesComponent } from './series/series.component';
import { SerieResolver } from './core/series/serie.resolver';
import { SeriesDetalhadasComponent } from './series/series-detalhadas/series-detalhadas.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },              
    { 
        path: 'series', 
        component: SeriesComponent,
        resolve: {
            series: SerieResolver
        }
    },
    {
        path: 'series/:idserie',
        component: SeriesDetalhadasComponent
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

