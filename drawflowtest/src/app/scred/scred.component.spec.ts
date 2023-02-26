import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScredComponent } from './scred.component';

describe('ScredComponent', () => {
  let component: ScredComponent;
  let fixture: ComponentFixture<ScredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
