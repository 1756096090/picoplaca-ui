// src/app/services/picoplaca.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PicoplacaService {
  private readonly url = 'http://localhost:8080/api/picoplaca/allowed';

  constructor(private http: HttpClient) {}

  isAllowed(placa: string, fecha: string, hora: string): Observable<boolean> {
    const params = new HttpParams()
      .set('placa', placa)
      .set('fecha', fecha)
      .set('hora', hora);

    return this.http.get<boolean>(this.url, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        // extrae el mensaje que manda el backend
        const msg = error.error?.message ?? 'Error al consultar';
        // lanza el string msg para que el componente lo reciba en el callback de error
        return throwError(() => msg);
      })
    );
  }
}
