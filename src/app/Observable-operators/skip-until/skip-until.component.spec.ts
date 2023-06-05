import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipUntilComponent } from './skip-until.component';

describe('SkipUntilComponent', () => {
  let component: SkipUntilComponent;
  let fixture: ComponentFixture<SkipUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipUntilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
