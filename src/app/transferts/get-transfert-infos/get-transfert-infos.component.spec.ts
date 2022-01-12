import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransfertInfosComponent } from './get-transfert-infos.component';

describe('GetTransfertInfosComponent', () => {
  let component: GetTransfertInfosComponent;
  let fixture: ComponentFixture<GetTransfertInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTransfertInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTransfertInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
