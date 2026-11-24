import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gioco } from '../gioco';

@Injectable({ providedIn: 'root' })
export class GiocoService {
  private http = inject(HttpClient);
  private url = '/api/giochi';

  getGiochi(): Observable<Gioco[]> {
    return this.http.get<Gioco[]>(this.url);
  }
  // getGioco(id) lo aggiungerai nella sezione 7,
  // creaOrdine(...) nella sezione 8
}
