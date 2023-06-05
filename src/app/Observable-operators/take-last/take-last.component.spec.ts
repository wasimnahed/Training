import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeLastComponent } from './take-last.component';

describe('TakeLastComponent', () => {
  let component: TakeLastComponent;
  let fixture: ComponentFixture<TakeLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
