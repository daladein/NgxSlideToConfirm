import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToConfirmComponent } from './slide-to-confirm.component';

describe('SlideToConfirmComponent', () => {
  let component: SlideToConfirmComponent;
  let fixture: ComponentFixture<SlideToConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideToConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
