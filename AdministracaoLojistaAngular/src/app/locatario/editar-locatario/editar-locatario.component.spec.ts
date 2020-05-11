import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLocatarioComponent } from './editar-locatario.component';

describe('EditarLocatarioComponent', () => {
  let component: EditarLocatarioComponent;
  let fixture: ComponentFixture<EditarLocatarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarLocatarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLocatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
