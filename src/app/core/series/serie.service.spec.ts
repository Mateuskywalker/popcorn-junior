import { TestBed } from '@angular/core/testing';

import { SerieService } from './serie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('SerieService', () => { 

  function setup() {
   
    const httpClientController: HttpTestingController = TestBed.get(HttpTestingController);
    const httpTestingController = TestBed.get(HttpTestingController);
    const serieService = TestBed.get(SerieService);

    return {  httpClientController, serieService, httpTestingController};
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

  it('should get the pages strings("shows/1")', () => {

    const { httpClientController, serieService } = setup();
    const mockPaginas = ['shows/1', 'shows/2', 'shows/3']

    serieService.StringPaginas().subscribe(data => {
        expect(data.mockPaginas.length).toBe(3);
    });

    const testResquest = httpClientController.expectOne('https://tv-v2.api-fetch.website/shows');

    testResquest.flush({
      mockPaginas
    });
  });

  it('should get the series of the page 1', () => {
    const { httpClientController, serieService } = setup();
    const mockSeries = [{poster: "http://thetvdb.com/banners/posters/5bd4e2ed30cba.jpg",
    imdb_id: "tt9198016",
    num_seasons: 1,
    rating: {percentage: 85, watching: 0, votes: 2, loved: 100, hated: 100},
    slug: "big-cat-tales",
    title: "Big Cat Tales",
    tvdb_id: "354708",
    year: "2018",
    _id: "tt9198016"}];

    serieService.SeriesPorPaginas("shows/1").subscribe(data => {
      expect(data.mockSeries.length).toBe(1);
  });

    const testResquest = httpClientController.expectOne('https://tv-v2.api-fetch.website/shows/1?sort=name&order=1');
    testResquest.flush({
      mockSeries
    }); 
  });

  it('should get the detail of the serie', () => {
    const { httpClientController, serieService } = setup();
    const mockDetail = {air_day: "Wednesday",
    air_time: "09:00",
    country: "us",
    genres: ["action", "adventure", "animation", "family", "comedy", "fantasy", "science-fiction"],
    images: {poster: "http://image.tmdb.org/t/p/w500/vT0AngQDHgBUqDmdhMJr1kGo6NF.jpg"},
    imdb_id: "tt4209752",
    last_updated: 1552316518303,
    network: "Canal J",
    num_seasons: 1,
    rating: {percentage: 64, watching: 0, votes: 5, loved: 100, hated: 100},
    runtime: "25",
    slug: "zak-storm-super-pirate",
    status: "returning series",
    title: "Zak Storm, Super Pirate",
    tvdb_id: "333812"};

    serieService.SerieDetalhada("tt0972534").subscribe(data => {
      expect(data.mockDetail).toEqual(mockDetail);
    });

    const testResquest = httpClientController.expectOne('https://tv-v2.api-fetch.website/show/tt0972534');
    testResquest.flush({
      mockDetail
    });
  });

  afterEach(() => {
    const { httpTestingController } = setup();
    httpTestingController.verify();
  });
});
