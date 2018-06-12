import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiotComponent } from './riot.component';

describe('RiotComponent', () => {
  let component: RiotComponent;
  let fixture: ComponentFixture<RiotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
