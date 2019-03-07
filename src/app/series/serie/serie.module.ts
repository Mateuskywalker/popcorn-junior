import { NgModule } from '@angular/core';
import { SerieComponent } from './serie.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ZoomOnHoverModule } from 'src/app/shared/directives/zoom-on-hover/zoom-on-hover.module';

@NgModule({
    declarations: [SerieComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ZoomOnHoverModule
    ],
    exports: [ SerieComponent ]
})
export class SerieModule { }