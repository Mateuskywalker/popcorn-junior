import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SerieService {

    constructor(private http: HttpClient) {}

    public pages(): Observable<any> {
        return this.http.get('https://tv-v2.api-fetch.website/shows');
    }

    public shows(pagina: string): Observable<any> {
            return this.http.get(`https://tv-v2.api-fetch.website/${pagina}?sort=name&order=1`);
    }

    public details(imdbid: string): Observable<any> {
        return this.http.get<any>(`https://tv-v2.api-fetch.website/show/${imdbid}`);
    }
}
