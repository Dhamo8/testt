import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcomponentAComponent } from './testcomponent-a.component';

describe('TestcomponentAComponent', () => {
  let component: TestcomponentAComponent;
  let fixture: ComponentFixture<TestcomponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcomponentAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcomponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
