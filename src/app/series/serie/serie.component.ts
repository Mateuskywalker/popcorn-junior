import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { SerieItem } from '../../models/serieItem.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']

})
export class SerieComponent implements OnInit {

  @Input() series: any[] = [];
  @Output() dados = new EventEmitter();
  @Output() loadMore = new EventEmitter();

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
