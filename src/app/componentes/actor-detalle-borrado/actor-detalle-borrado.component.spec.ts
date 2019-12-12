import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetalleBorradoComponent } from './actor-detalle-borrado.component';

describe('ActorDetalleBorradoComponent', () => {
  let component: ActorDetalleBorradoComponent;
  let fixture: ComponentFixture<ActorDetalleBorradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorDetalleBorradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetalleBorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
