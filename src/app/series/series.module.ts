import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { SerieModule } from './serie/serie.module';
import { SeriesComponent } from './series.component';
import { InputModule } from '../shared/components/input/input.module';
import { FilterByNameModule } from '../shared/pipes/filter-by-name.module';

@NgModule({
    declarations: [
        SeriesComponent
    ],
    imports: [ 
        BrowserModule,
        SerieModule,
        InputModule,
        FilterByNameModule,
        BrowserAnimationsModule
    ]
})
export class SeriesModule {}