import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ZoomOnHoverModule } from 'src/app/shared/directives/zoom-on-hover/zoom-on-hover.module';
import { SeriesDetalhadasComponent } from '../series-detalhadas/series-detalhadas.component';

@NgModule({
    declarations: [ SeriesDetalhadasComponent ],
    imports: [
        CommonModule,
        HttpClientModule,
        ZoomOnHoverModule
    ],
    exports: [ SeriesDetalhadasComponent ]
})
export class SeriesDetalhadasModule { }