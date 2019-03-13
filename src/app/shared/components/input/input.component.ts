import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  valor: string;
  @Output() value = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) {
    this.valor = (event.target as HTMLInputElement).value;
    let temp: string;

    if (this.valor !== temp) {
      temp = this.valor;
      this.value.emit((event.target as HTMLInputElement).value);
    }
  }
}
