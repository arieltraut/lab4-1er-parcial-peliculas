import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPeliculasListadoComponent } from './actor-peliculas-listado.component';

describe('ActorPeliculasListadoComponent', () => {
  let component: ActorPeliculasListadoComponent;
  let fixture: ComponentFixture<ActorPeliculasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorPeliculasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorPeliculasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
