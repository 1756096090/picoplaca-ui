import { Component } from '@angular/core';
import { PicoplacaFormComponent } from './components/picoplaca-form/picoplaca-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [PicoplacaFormComponent],
  styleUrls: ['./app.component.css'],
  template: `<app-picoplaca-form></app-picoplaca-form>`
})

export class AppComponent {
  title = 'picoplaca-ui';
}
