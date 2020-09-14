import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeHuntComponent } from './poke-hunt.component';

describe('PokeHuntComponent', () => {
  let component: PokeHuntComponent;
  let fixture: ComponentFixture<PokeHuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeHuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
