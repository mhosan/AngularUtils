import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-dialog-si-no',
  standalone: true,
  imports: [],
  templateUrl: './dialog-si-no.component.html',
  styleUrl: './dialog-si-no.component.css'
})
export class DialogSiNoComponent {
  @Output() opcionSeleccionada = new EventEmitter<boolean>();

  onYes() {
    this.opcionSeleccionada.emit(true);
  }

  onNo() {
    this.opcionSeleccionada.emit(false);
  }

  open() {
    const modal = bootstrap.Modal.getInstance('#myModal');
    modal?.show();
  }

}
