import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalculatorComponent } from './s-calculator.component';

describe('SCalculatorComponent', () => {
  let component: ScalculatorComponent;
  let fixture: ComponentFixture<ScalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
