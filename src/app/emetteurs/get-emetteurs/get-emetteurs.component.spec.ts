import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmetteursComponent } from './get-emetteurs.component';

describe('GetEmetteursComponent', () => {
  let component: GetEmetteursComponent;
  let fixture: ComponentFixture<GetEmetteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmetteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmetteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
