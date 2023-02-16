import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithoutNavbarComponent } from './layout-without-navbar.component';

describe('LayoutWithoutNavbarComponent', () => {
  let component: LayoutWithoutNavbarComponent;
  let fixture: ComponentFixture<LayoutWithoutNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutWithoutNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutWithoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
