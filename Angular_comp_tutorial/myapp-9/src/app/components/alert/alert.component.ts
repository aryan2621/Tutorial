import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() error: string = 'This is the error message';
  @Output() errorClose = new EventEmitter<any>();
  closeError() {
    this.errorClose.emit();
  }
}
