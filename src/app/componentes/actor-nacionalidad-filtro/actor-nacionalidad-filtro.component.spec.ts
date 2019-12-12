import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorNacionalidadFiltroComponent } from './actor-nacionalidad-filtro.component';

describe('ActorNacionalidadFiltroComponent', () => {
  let component: ActorNacionalidadFiltroComponent;
  let fixture: ComponentFixture<ActorNacionalidadFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorNacionalidadFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorNacionalidadFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
