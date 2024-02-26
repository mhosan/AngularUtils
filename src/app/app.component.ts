import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DialogSiNoComponent } from "./components/dialog-si-no/dialog-si-no.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, DialogSiNoComponent]
})
export class AppComponent {
  title = 'utils';
  onOpcionSeleccionada(opcion: boolean) {
    if (opcion) {
      console.log('El usuario seleccionó Sí');
      alert("se seleccionó SI");
    } else {
      console.log('El usuario seleccionó No');
      alert("se seleccionó NO");
    }
  }
}
