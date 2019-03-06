import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from "./serie";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class SerieService {

    constructor(private http: HttpClient) {}
 
}
