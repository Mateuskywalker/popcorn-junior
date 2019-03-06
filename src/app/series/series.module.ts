import { NgModule } from '@angular/core';
import { SerieModule } from './serie/serie.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    imports: [ 
        SerieModule,
        DarkenOnHoverModule
    ]
})
export class SeriesModule {}