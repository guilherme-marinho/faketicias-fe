import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComidasComponent } from './lista-comidas.component';

describe('ListaComidasComponent', () => {
  let component: ListaComidasComponent;
  let fixture: ComponentFixture<ListaComidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
