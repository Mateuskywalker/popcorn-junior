import { NgModule } from '@angular/core';
import { SerieComponent } from './serie.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [SerieComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ SerieComponent ]
})
export class SerieModule { }