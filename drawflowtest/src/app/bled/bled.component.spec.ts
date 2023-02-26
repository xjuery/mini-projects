import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BledComponent } from './bled.component';

describe('BledComponent', () => {
  let component: BledComponent;
  let fixture: ComponentFixture<BledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
