import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PicoplacaService {
  private readonly url = 'http://localhost:8080/api/picoplaca/allowed';

  constructor(private http: HttpClient) {}

  isAllowed(placa: string, fecha: string, hora: string): Observable<boolean> {
    const params = new HttpParams()
      .set('placa', placa)
      .set('fecha', fecha)
      .set('hora', hora);
    return this.http.get<boolean>(this.url, { params });
  }
}