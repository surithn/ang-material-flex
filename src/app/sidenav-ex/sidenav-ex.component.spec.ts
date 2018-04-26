import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavExComponent } from './sidenav-ex.component';

describe('SidenavExComponent', () => {
  let component: SidenavExComponent;
  let fixture: ComponentFixture<SidenavExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
