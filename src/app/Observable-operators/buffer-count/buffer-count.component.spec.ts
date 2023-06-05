import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferCountComponent } from './buffer-count.component';

describe('BufferCountComponent', () => {
  let component: BufferCountComponent;
  let fixture: ComponentFixture<BufferCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
