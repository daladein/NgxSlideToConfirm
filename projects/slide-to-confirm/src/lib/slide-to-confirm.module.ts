import { NgModule } from '@angular/core';
import { SlideToConfirmComponent } from './slide-to-confirm.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SlideToConfirmComponent],
  imports: [
    DragDropModule,
    CommonModule
  ],
  exports: [SlideToConfirmComponent]
})
export class SlideToConfirmModule { }
