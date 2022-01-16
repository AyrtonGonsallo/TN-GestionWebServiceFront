import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWalletsComponent } from './get-wallets.component';

describe('GetWalletsComponent', () => {
  let component: GetWalletsComponent;
  let fixture: ComponentFixture<GetWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWalletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
