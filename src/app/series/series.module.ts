import { NgModule } from '@angular/core';
import { SerieModule } from './serie/serie.module';

import { ZoomOnHoverModule } from '../shared/directives/zoom-on-hover/zoom-on-hover.module';
import { SeriesComponent } from './series.component';
import { InputModule } from '../shared/components/input/input.module';
import { FilterByNameModule } from '../shared/pipes/filter-by-name.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        SeriesComponent
    ],
    imports: [ 
        BrowserModule,
        SerieModule,
        InputModule,
        FilterByNameModule
    ]
})
export class SeriesModule {}