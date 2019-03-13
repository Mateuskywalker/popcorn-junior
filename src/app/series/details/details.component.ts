import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from 'src/app/core/series/serie.service';
import { SeriesDetalhadas } from 'src/app/core/models/series-detalhadas.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class SeriesDetalhadasComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  imdb_id = '';
  serie: SeriesDetalhadas;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serieService: SerieService
  ) { }

  ngOnInit() {
    this.imdb_id = this.activatedRoute.snapshot.params.idserie;
    this.serieService.details(this.imdb_id).subscribe(data => {
      console.log(data);
      this.serie = data;
    });
  }
}
