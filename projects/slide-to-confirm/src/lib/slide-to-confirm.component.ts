import { CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-slide-to-confirm',
  templateUrl: './slide-to-confirm.component.html',
  styleUrls: ['slide-to-confirm.component.scss']
})
export class SlideToConfirmComponent {

  @Input() color: string = 'rgba(0,212,255,1) ';
  @Input() backgroundColor: string = 'rgb(24, 201, 98)';
  @Input() placeHolder = 'Swipe To Confirm';
  @Input() class = '';
  @Input() successText = 'Confirmed';
  @Input() confirmedIcon = '✓';
  @Input() resetIcon = '❌';

  @Input() reset = false;

  /** @deprecated use confirmEvent instead **/
  @Output() confirm = new EventEmitter<void>();
  @Output() confirmEvent = new EventEmitter<void>();
  @Output() resetEvent = new EventEmitter<void>();

  isConfirmed = false;
  opacity = 1;
  percentage = 0
  percentageSuccess = 0

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      this.isConfirmed = true;

      this.opacity = 0;
      this.confirmationDone();
      this.percentageSuccess = 100;
    } else {
      this.percentage = 0;
      this.percentageSuccess = 0;
      this.resetAll();
    }
  }

  confirmationDone() {
    this.confirm.emit();
    this.confirmEvent.emit();
  }

  resetAll() {
    this.isConfirmed = false;
    this.opacity = 1;
    this.percentage = 0;
    this.percentageSuccess = 0;
  }

  handleMove(event: CdkDragMove) {
    this.percentage = this.calculatePercetage(event.distance.x, document.getElementById("slide-to-confirm-wrapper").clientWidth - 64);
    this.percentageSuccess = this.calculatePercetage(event.distance.x - 64, document.getElementById("slide-to-confirm-wrapper").clientWidth - 64);

    if (this.opacity >= 0 && this.opacity <= 1) {
      if (event.delta.x === 1) {
        this.opacity -= 0.01;
      } else if (event.delta.x === -1) {
        this.opacity += 0.01;
      }
    }
  }

  calculatePercetage(a, b) {
    return (a / b) * 100;
  }

  onCancel() {
    if (!this.reset) {
      return;
    }

    this.resetAll();
    this.resetEvent.emit();
  }
}
