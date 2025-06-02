import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFormComponent } from './all-form.component';

describe('AllFormComponent', () => {
  let component: AllFormComponent;
  let fixture: ComponentFixture<AllFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
