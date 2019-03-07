import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SerieService } from '../core/series/serie.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {

  @Input() displayAnchor = false;

  log: any[] = [];
  value: any = '';
  public paginas: any[] = [];
  public paginasComseries: any[] = [];
  public seriesIndividuais: any[] = [];
  public seriesIndividuaisAll: any[] = [];
  public series: any;
  public seriesMarcadas: any = [];
  private loadMore = false;
  private counterLoader = 0;

  @ViewChild('input') inputDOM: HTMLElement;

  constructor(
    private serieService: SerieService
  ) {}

  ngOnInit() {

    // busca todas as series por pagina
    this.serieService.StringPaginas().pipe(
      tap(paginas => {
        paginas.forEach(pagina => {
        this.serieService.SeriesPorPaginas(pagina)
          .subscribe(paginasserie => {
            this.paginasComseries.push(paginasserie)
          });
        });
      })
    ).subscribe();


    setTimeout(() => {
      this.imprimeTodasAsSeries();
    }, 3000);
  }

  // seta o titulo pesquisado
  setInputValue(serieTitle: string) {
    this.value = serieTitle;
  }

  // pesquisa pela serie e traz os detalhes
  trasSerieDetalhada($event) {
    const id = $event;
    this.serieService.SerieDetalhada(id)
    .subscribe(serie => {
      console.log(serie);
      this.seriesMarcadas.push(serie);
    });
  }

  // imprime todas as paginas com series
  imprimeTodasAsSeries(): void {
    if (this.loadMore !== false) {
      ++this.counterLoader;
    }
    this.paginasComseries.forEach(paginaserie => {
        paginaserie.forEach(series => {
          this.seriesIndividuaisAll.push(series);
        });
    });
    this.paginasComseries.forEach(paginaserie => {
        this.seriesIndividuais.push(paginaserie[this.counterLoader]);
    });
  }

  loadMoreMethod($event) {
    this.loadMore = $event;
    this.imprimeTodasAsSeries();
  }
}
