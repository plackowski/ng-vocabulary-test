import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordButtonsComponent } from './word-buttons.component';

describe('WordButtonsComponent', () => {
  let component: WordButtonsComponent;
  let fixture: ComponentFixture<WordButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
