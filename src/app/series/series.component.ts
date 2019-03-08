import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { SerieService } from '../core/series/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {

  @Input() displayAnchor = false;

  log: any[] = [];
  value: any = '';
  public seriesMarcadas: any = [];
  public seriesIndividuais: any[] = [];
  private loadMore = false;
  private counterLoader = 1;

  paginasComSeries: any[] = this.activatedRoute.snapshot.data['series'];

  @ViewChild('input') inputDOM: HTMLElement;

  constructor(
    private serieService: SerieService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.imprimeTodasAsSeries();
  }

  setInputValue(serieTitle: string) {
    this.value = serieTitle;
  }

  trasSerieDetalhada($event) {
    const id = $event;
    this.serieService.SerieDetalhada(id)
    .subscribe(serie => {
      console.log(serie);
      this.seriesMarcadas.push(serie);
    });
  }

  imprimeTodasAsSeries(): void {
    if(this.loadMore) {
      ++this.counterLoader;

    this.serieService.StringPaginas().pipe(
      tap(paginas => {
        paginas.forEach(pagina => {
        this.serieService.SeriesPorPaginas(pagina)
          .subscribe(paginasserie => {
            this.seriesIndividuais = this.seriesIndividuais.concat(paginasserie[this.counterLoader])
          });
        });
      })
    ).subscribe();

    } else {
      this.paginasComSeries.forEach(paginaserie => {
        this.seriesIndividuais.push(paginaserie);
      });
    }
  }


  loadMoreMethod($event) {
    this.loadMore = $event;
    this.imprimeTodasAsSeries();
  }
}
