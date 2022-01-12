import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBeneficiaireComponent } from './create-beneficiaire.component';

describe('CreateBeneficiaireComponent', () => {
  let component: CreateBeneficiaireComponent;
  let fixture: ComponentFixture<CreateBeneficiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBeneficiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
