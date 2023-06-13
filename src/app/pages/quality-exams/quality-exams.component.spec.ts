import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityExamsComponent } from './quality-exams.component';

describe('QualityExamsComponent', () => {
  let component: QualityExamsComponent;
  let fixture: ComponentFixture<QualityExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityExamsComponent]
    });
    fixture = TestBed.createComponent(QualityExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
