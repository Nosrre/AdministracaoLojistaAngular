import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatarioComponent } from './locatario.component';

describe('LocatarioComponent', () => {
  let component: LocatarioComponent;
  let fixture: ComponentFixture<LocatarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
