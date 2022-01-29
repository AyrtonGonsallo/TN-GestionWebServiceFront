import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransfertsMComponent } from './get-transferts-m.component';

describe('GetTransfertsMComponent', () => {
  let component: GetTransfertsMComponent;
  let fixture: ComponentFixture<GetTransfertsMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTransfertsMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTransfertsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
