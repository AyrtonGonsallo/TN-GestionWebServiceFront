import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCartesComponent } from './get-cartes.component';

describe('GetCartesComponent', () => {
  let component: GetCartesComponent;
  let fixture: ComponentFixture<GetCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCartesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
