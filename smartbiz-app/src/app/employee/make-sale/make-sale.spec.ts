import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSale } from './make-sale';

describe('MakeSale', () => {
  let component: MakeSale;
  let fixture: ComponentFixture<MakeSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeSale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeSale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
