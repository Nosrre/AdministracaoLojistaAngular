import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatarioCreateComponent } from './locatario-create.component';

describe('LocatarioCreateComponent', () => {
  let component: LocatarioCreateComponent;
  let fixture: ComponentFixture<LocatarioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatarioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
