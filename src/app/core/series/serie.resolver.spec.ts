import { SerieResolver } from "./serie.resolver";
import { Observable, of } from 'rxjs';

describe('SerieResolver', () =>  {

    let serieService;
    let serieResolver: SerieResolver;
    beforeEach(() => {
         serieService = jasmine.createSpyObj('SerieService', ['SeriesPorPaginas'])
         serieResolver = new SerieResolver(serieService);
    });

    it('should call SeriesPorPaginas', () => {
        serieService.SeriesPorPaginas.and.returnValue(of([
            {}
        ]));

        const observableValues: Observable<any[]> = serieResolver.resolve(null, null);

        observableValues.subscribe(values => {
            expect(serieService.SeriesPorPaginas).toHaveBeenCalledWith('shows/1');
        })
    });

    it('should return an object with any values', () => {
        serieService.SeriesPorPaginas.and.returnValue(of([
            {id: 1}
        ]));
        const observableValues: Observable<any[]> = serieResolver.resolve(null, null);

        observableValues.subscribe(values =>{
            expect(values.length).toEqual(1);
        });
    });
})