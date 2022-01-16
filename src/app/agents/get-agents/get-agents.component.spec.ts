import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAgentsComponent } from './get-agents.component';

describe('GetAgentsComponent', () => {
  let component: GetAgentsComponent;
  let fixture: ComponentFixture<GetAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
