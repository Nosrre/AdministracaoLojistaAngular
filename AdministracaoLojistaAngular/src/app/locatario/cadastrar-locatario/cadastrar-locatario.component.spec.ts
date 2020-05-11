import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLocatarioComponent } from './cadastrar-locatario.component';

describe('CadastrarLocatarioComponent', () => {
  let component: CadastrarLocatarioComponent;
  let fixture: ComponentFixture<CadastrarLocatarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarLocatarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLocatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
