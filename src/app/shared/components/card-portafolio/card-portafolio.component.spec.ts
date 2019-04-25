import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPortafolioComponent } from './card-portafolio.component';

describe('CardPortafolioComponent', () => {
  let component: CardPortafolioComponent;
  let fixture: ComponentFixture<CardPortafolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPortafolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
