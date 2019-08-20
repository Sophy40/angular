import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponrentComponent } from './product-componrent.component';

describe('ProductComponrentComponent', () => {
  let component: ProductComponrentComponent;
  let fixture: ComponentFixture<ProductComponrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
