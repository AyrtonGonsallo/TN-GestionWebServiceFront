import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPiecesIdentitesComponent } from './get-pieces-identites.component';

describe('GetPiecesIdentitesComponent', () => {
  let component: GetPiecesIdentitesComponent;
  let fixture: ComponentFixture<GetPiecesIdentitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPiecesIdentitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPiecesIdentitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
