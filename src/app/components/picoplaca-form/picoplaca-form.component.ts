// src/app/components/picoplaca-form/picoplaca-form.component.ts
import { Component }           from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatButtonModule }     from '@angular/material/button';
import { PicoplacaService }    from '../../services/picoplaca.service';

@Component({
  standalone: true,
  selector: 'app-picoplaca-form',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ PicoplacaService ],
  templateUrl: './picoplaca-form.component.html',
  styleUrls:   ['./picoplaca-form.component.css']
})
export class PicoplacaFormComponent {
  placa     = '';
  fecha    !: string;
  hora     !: string;
  resultado: boolean | null = null;
  cargando  = false;
  errorMsg  = '';

  constructor(private svc: PicoplacaService) {
    // inicializamos 5 minutos en el futuro
    const offsetDate = new Date(Date.now() + 5 * 60_000);
    this.fecha = offsetDate.toISOString().slice(0, 10);
    this.hora  = offsetDate.toTimeString().slice(0, 5);
  }

  consultar(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.resultado = null;
    this.errorMsg  = '';
    this.cargando  = true;

    this.svc.isAllowed(this.placa, this.fecha, this.hora)
      .subscribe({
        next: r => {
          this.resultado = r;
          this.cargando  = false;
        },
        error: (msg: string) => {
          this.errorMsg = msg;
          this.cargando = false;
        }
      });
  }
}
