import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaComidaComponent } from './tabela-comida.component';

describe('TabelaComidaComponent', () => {
  let component: TabelaComidaComponent;
  let fixture: ComponentFixture<TabelaComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
