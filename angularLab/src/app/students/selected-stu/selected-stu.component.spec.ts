import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStuComponent } from './selected-stu.component';

describe('SelectedStuComponent', () => {
  let component: SelectedStuComponent;
  let fixture: ComponentFixture<SelectedStuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedStuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
