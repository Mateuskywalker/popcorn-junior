import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: 'serie.component.html'
})
export class SerieComponent {
    
    @Input() description='';
    
    @Input() url='';
}