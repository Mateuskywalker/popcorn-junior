import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from 'src/app/core/series/serie.service';
import { SeriesDetalhadas } from 'src/app/core/models/series-detalhadas.model';

@Component({
  selector: 'app-series-detalhada',
  templateUrl: './series-detalhadas.component.html',
  styleUrls: ['./series-detalhadas.component.scss']
})
export class SeriesDetalhadasComponent implements OnInit {

  imdb_id: string = '';
  serie: SeriesDetalhadas;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private serieService: SerieService
  ) { }

  ngOnInit() {
    this.imdb_id = this.ActivatedRoute.snapshot.params.idserie;
    this.serieService.SerieDetalhada(this.imdb_id).subscribe(data => {
      console.log(data);
      this.serie = data;
    });
  }
}
