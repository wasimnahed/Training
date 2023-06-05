import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipWhileComponent } from './skip-while.component';

describe('SkipWhileComponent', () => {
  let component: SkipWhileComponent;
  let fixture: ComponentFixture<SkipWhileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipWhileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
