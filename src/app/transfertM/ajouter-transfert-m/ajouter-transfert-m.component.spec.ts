import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTransfertMComponent } from './ajouter-transfert-m.component';

describe('AjouterTransfertMComponent', () => {
  let component: AjouterTransfertMComponent;
  let fixture: ComponentFixture<AjouterTransfertMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTransfertMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTransfertMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
