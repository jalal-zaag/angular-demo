import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() alertType = "";
  @Input() alertMessage = "";

  @Output() onBtnClick = new EventEmitter<string>();

  onClcik() {
    this.onBtnClick.emit("Hi from child")
  }
}
