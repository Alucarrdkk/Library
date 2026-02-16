import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProduct } from './see-product';

describe('SeeProduct', () => {
  let component: SeeProduct;
  let fixture: ComponentFixture<SeeProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
