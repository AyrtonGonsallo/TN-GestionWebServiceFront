import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGichetComponent } from './create-gichet.component';

describe('CreateGichetComponent', () => {
  let component: CreateGichetComponent;
  let fixture: ComponentFixture<CreateGichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGichetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
