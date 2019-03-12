import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SeriesComponent } from './series.component';
import { SerieService } from '../core/series/serie.service';
import { InputModule } from '../shared/components/input/input.module';
import { FilterByNameModule } from '../shared/pipes/filter-by-name.module';
import { SerieModule } from './serie/serie.module';


xdescribe('Series Component', () => {

    function setup() {
        const fixture = TestBed.createComponent(SeriesComponent);
        const component = fixture.debugElement.componentInstance;
        const serieService = fixture.debugElement.injector.get(SerieService);
        return { component, fixture, serieService };
    }

    const fakeActivatedRoute = {
        snapshot: { data: {}}
      } as ActivatedRoute;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
            declarations: [
            SeriesComponent
            ],
            imports: [ InputModule, SerieModule , FilterByNameModule, RouterTestingModule ],
            providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute} ]
        }).compileComponents();
    }));

    it('should create the Series Component', async () => {
        const { component } = setup();
        expect(component).toBeTruthy();
    });

    it('should display the series on body', async(() => {
        const { fixture, component, serieService } = setup();
        const mockSeries = [{poster: 'http://thetvdb.com/banners/posters/5bd4e2ed30cba.jpg',
        imdb_id: 'tt9198016',
        num_seasons: 1,
        rating: {percentage: 85, watching: 0, votes: 2, loved: 100, hated: 100},
        slug: 'big-cat-tales',
        title: 'Big Cat Tales',
        tvdb_id: '354708',
        year: '2018',
        _id: 'tt9198016'}];

        spyOn(serieService, 'StringPaginas').and.returnValue(mockSeries);
        fixture.detectChanges();

        const serieElement = fixture.debugElement.nativeElement('series-parent');
        expect(serieElement).toBeTruthy();
    }));
});
