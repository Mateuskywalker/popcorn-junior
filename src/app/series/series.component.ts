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
  public indivualshows: any[] = [];
  private loadMore = false;
  private counterLoader = 1;

  pagesWithSeries: any[] = this.activatedRoute.snapshot.data.series;

  @ViewChild('input') inputDOM: HTMLElement;

  constructor(
    private serieService: SerieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.showShows();
  }

  setInputValue(serieTitle: string) {
    this.value = serieTitle;
  }

  getDetails($event) {
    const id = $event;
    this.serieService.details(id)
    .subscribe(serie => {
      this.router.navigate(['series', serie.imdb_id]);
    });
  }

  showShows(): void {
    if (this.loadMore) {
      ++this.counterLoader;

      this.serieService.pages().pipe(
      tap(paginas => {
        paginas.forEach(pagina => {
          this.serieService.shows(pagina)
            .subscribe(paginasserie => {
              this.indivualshows = this.indivualshows.concat(paginasserie[this.counterLoader]);
          });
        });
      })
    ).subscribe();

    } else {
      this.pagesWithSeries.forEach(paginaserie => {
        this.indivualshows.push(paginaserie);
      });
    }
  }


  loadMoreMethod($event) {
    this.loadMore = $event;
    this.showShows();
  }
}
