import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirststandaloneComponent } from './firststandalone.component';

describe('FirststandaloneComponent', () => {
  let component: FirststandaloneComponent;
  let fixture: ComponentFixture<FirststandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FirststandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirststandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
