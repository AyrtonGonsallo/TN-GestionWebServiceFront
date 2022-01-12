import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientsInfosComponent } from './update-clients-infos.component';

describe('UpdateClientsInfosComponent', () => {
  let component: UpdateClientsInfosComponent;
  let fixture: ComponentFixture<UpdateClientsInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientsInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
