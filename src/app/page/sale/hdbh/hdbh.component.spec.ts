import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdbhComponent } from './hdbh.component';

describe('HdbhComponent', () => {
  let component: HdbhComponent;
  let fixture: ComponentFixture<HdbhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdbhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdbhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
