import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmetteurComponent } from './create-emetteur.component';

describe('CreateEmetteurComponent', () => {
  let component: CreateEmetteurComponent;
  let fixture: ComponentFixture<CreateEmetteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmetteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmetteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
