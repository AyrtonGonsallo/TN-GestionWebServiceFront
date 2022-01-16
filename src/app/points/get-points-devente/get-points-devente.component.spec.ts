import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPointsDeventeComponent } from './get-points-devente.component';

describe('GetPointsDeventeComponent', () => {
  let component: GetPointsDeventeComponent;
  let fixture: ComponentFixture<GetPointsDeventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPointsDeventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPointsDeventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
