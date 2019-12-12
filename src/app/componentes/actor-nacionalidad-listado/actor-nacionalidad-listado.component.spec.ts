import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorNacionalidadListadoComponent } from './actor-nacionalidad-listado.component';

describe('ActorNacionalidadListadoComponent', () => {
  let component: ActorNacionalidadListadoComponent;
  let fixture: ComponentFixture<ActorNacionalidadListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorNacionalidadListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorNacionalidadListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
