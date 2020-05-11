import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocatarioComponent } from './lista-locatario.component';

describe('ListaLocatarioComponent', () => {
  let component: ListaLocatarioComponent;
  let fixture: ComponentFixture<ListaLocatarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLocatarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLocatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
