import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorNacionalidadNexoComponent } from './actor-nacionalidad-nexo.component';

describe('ActorNacionalidadNexoComponent', () => {
  let component: ActorNacionalidadNexoComponent;
  let fixture: ComponentFixture<ActorNacionalidadNexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorNacionalidadNexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorNacionalidadNexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
