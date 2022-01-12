import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientsInfosComponent } from './get-clients-infos.component';

describe('GetClientsInfosComponent', () => {
  let component: GetClientsInfosComponent;
  let fixture: ComponentFixture<GetClientsInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientsInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
