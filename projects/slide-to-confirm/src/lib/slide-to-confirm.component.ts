import { CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-slide-to-confirm',
  templateUrl: './slide-to-confirm.component.html',
  styleUrls: ['slide-to-confirm.component.scss']
})
export class SlideToConfirmComponent implements OnInit {

  @Input() color: string = 'rgba(0,212,255,1) ';
  @Input() placeHolder = 'Swipe To Confirm';
  @Input() class = '';
  @Input() successText = 'Confirmed';

  @Input() reset = false;

  @Output() confirm = new EventEmitter<void>();

  isConfirmed = false;
  opacity = 1;
  percentage = 0
  percentageSuccess = 0


  constructor() { }
  ngOnInit() {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      this.isConfirmed = true;

      this.opacity = 0;
      this.confirm.emit();
      this.percentageSuccess = 100;
    } else {
      this.percentage = 0;
      this.percentageSuccess = 0;
      this.resetAll();
    }
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
}
