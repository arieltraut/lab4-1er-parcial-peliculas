import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorGrillaComponent } from './actor-grilla.component';

describe('ActorGrillaComponent', () => {
  let component: ActorGrillaComponent;
  let fixture: ComponentFixture<ActorGrillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorGrillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
