import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmetteurComponent } from './get-emetteur.component';

describe('GetEmetteurComponent', () => {
  let component: GetEmetteurComponent;
  let fixture: ComponentFixture<GetEmetteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmetteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmetteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
