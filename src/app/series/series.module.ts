import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SeriesComponent } from './series.component';
import { InputModule } from '../shared/components/input/input.module';
import { FilterByNameModule } from '../shared/pipes/filter-by-name.module';
import { ZoomOnHoverModule } from '../shared/directives/zoom-on-hover/zoom-on-hover.module';
import { SeriesDetalhadasComponent } from './details/details.component';
import { SerieComponent } from './serie/serie.component';

@NgModule({
    declarations: [
        SeriesComponent,
        SeriesDetalhadasComponent,
        SerieComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ZoomOnHoverModule,
        InputModule,
        FilterByNameModule,
        BrowserAnimationsModule
    ]
})
export class SeriesModule {}
