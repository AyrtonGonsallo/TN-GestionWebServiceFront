import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComptesComponent } from './get-comptes.component';

describe('GetComptesComponent', () => {
  let component: GetComptesComponent;
  let fixture: ComponentFixture<GetComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
