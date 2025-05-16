import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeDeliverValueComponent } from './how-we-deliver-value.component';

describe('HowWeDeliverValueComponent', () => {
  let component: HowWeDeliverValueComponent;
  let fixture: ComponentFixture<HowWeDeliverValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeDeliverValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeDeliverValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
