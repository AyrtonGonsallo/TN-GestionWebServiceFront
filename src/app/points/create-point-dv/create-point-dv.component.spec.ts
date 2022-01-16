import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePointDVComponent } from './create-point-dv.component';

describe('CreatePointDVComponent', () => {
  let component: CreatePointDVComponent;
  let fixture: ComponentFixture<CreatePointDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePointDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePointDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
