import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgxSlideToConfirm';

  onConfirmed() {
    console.log('✅ confirmed');
  }

  onReset() {
    console.log('❌ reset');
  }
}
