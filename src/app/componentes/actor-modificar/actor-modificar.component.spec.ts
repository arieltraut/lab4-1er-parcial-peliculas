import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorModificarComponent } from './actor-modificar.component';

describe('ActorModificarComponent', () => {
  let component: ActorModificarComponent;
  let fixture: ComponentFixture<ActorModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
