import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordButtonComponent } from './word-button.component';

describe('WordButtonComponent', () => {
  let component: WordButtonComponent;
  let fixture: ComponentFixture<WordButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
