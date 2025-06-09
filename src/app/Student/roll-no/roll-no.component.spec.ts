import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollNoComponent } from './roll-no.component';

describe('RollNoComponent', () => {
  let component: RollNoComponent;
  let fixture: ComponentFixture<RollNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollNoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
