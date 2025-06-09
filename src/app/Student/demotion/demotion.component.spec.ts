import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotionComponent } from './demotion.component';

describe('DemotionComponent', () => {
  let component: DemotionComponent;
  let fixture: ComponentFixture<DemotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
