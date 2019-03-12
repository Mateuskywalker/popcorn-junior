import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { SerieService } from '../core/series/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {

  @Input() displayAnchor = false;

  value: any = '';
  public seriesIndividuais: any[] = [];
  private loadMore = false;
  private counterLoader = 1;

  paginasComSeries: any[] = this.activatedRoute.snapshot.data['series'];

  @ViewChild('input') inputDOM: HTMLElement;

  constructor(
    private serieService: SerieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
      this.router.navigate(['series', serie.imdb_id])
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
