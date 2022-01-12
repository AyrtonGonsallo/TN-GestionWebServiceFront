import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBeneficiaireComponent } from './get-beneficiaire.component';

describe('GetBeneficiaireComponent', () => {
  let component: GetBeneficiaireComponent;
  let fixture: ComponentFixture<GetBeneficiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBeneficiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
