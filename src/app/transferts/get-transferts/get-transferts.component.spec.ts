import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransfertsComponent } from './get-transferts.component';

describe('GetTransfertsComponent', () => {
  let component: GetTransfertsComponent;
  let fixture: ComponentFixture<GetTransfertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTransfertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTransfertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
