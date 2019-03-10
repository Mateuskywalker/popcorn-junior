import { TestBed } from '@angular/core/testing';

import { SerieService } from './serie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('SerieService', () => { 

  function setup() {
   
    const httpClientController: HttpTestingController = TestBed.get(HttpTestingController);
    const serieService = TestBed.get(SerieService);

    return {  httpClientController, serieService};
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule ],
      providers: [
        SerieService
      ]
    });
  });

  afterEach(() => {
    const {httpClientController} = setup();
    httpClientController.verify();
  });

  it('should create the Serie Service', () => {
    const { serieService } = setup();
    expect(serieService).toBeTruthy();
  });

  fit('should get the pages strings("shows/1")', () => {

    const { serieService } = setup();
    const observableSerie: Observable<any[]> = serieService.StringPaginas();

    observableSerie.subscribe(data => {
        expect(data.length).toEqual(1);
    });
  });
});
