import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
  animations: [
    trigger('serieAppeared' , [
       state('ready', style({opacity: 1})),
       transition('void => ready', [
          style({opacity: 0, transform: 'translate(-30px, -10px)'}),
          animate('500ms 0s ease-in-out')
       ])
    ])
  ]
})
export class SerieComponent implements OnInit {

  @Input() series: any[] = [];
  @Input() inputValue = '';
  @Output() dados = new EventEmitter();
  @Output() loadMore = new EventEmitter();

  seriesState = 'ready';

  constructor() { }

  ngOnInit() {
  }

  loadMoreMethod() {
    this.loadMore.emit(true);
  }

  trasSerieDetalhada(id: string) {
    this.dados.emit(id);
  }
}
