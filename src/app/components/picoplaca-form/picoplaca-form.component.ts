import { Component } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule }   from '@angular/material/input';
import { MatButtonModule }  from '@angular/material/button';
import { PicoplacaService } from '../../services/picoplaca.service';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  providers: [ PicoplacaService ],    // ← aquí
  templateUrl: './picoplaca-form.component.html',
  styleUrls:   ['./picoplaca-form.component.css']
})

export class PicoplacaFormComponent {
  placa = '';
  fecha = this.today();
  hora  = this.now();
  resultado: boolean | null = null;
  cargando = false;
  errorMsg = '';

  constructor(private svc: PicoplacaService) {}

  today(): string {
    return new Date().toISOString().slice(0, 10);
  }

  now(): string {
    return new Date().toTimeString().slice(0,5);
  }

  consultar() {
    this.resultado = null;
    this.errorMsg = '';
    this.cargando = true;
    this.svc.isAllowed(this.placa, this.fecha, this.hora)
      .subscribe({
        next: r => { this.resultado = r; this.cargando = false; },
        error: () => { this.errorMsg = 'Error al consultar'; this.cargando = false; }
      });
  }
}