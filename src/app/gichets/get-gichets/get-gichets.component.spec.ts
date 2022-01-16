import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGichetsComponent } from './get-gichets.component';

describe('GetGichetsComponent', () => {
  let component: GetGichetsComponent;
  let fixture: ComponentFixture<GetGichetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGichetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGichetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
