import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordHeaderComponent } from './word-header.component';

describe('WordHeaderComponent', () => {
  let component: WordHeaderComponent;
  let fixture: ComponentFixture<WordHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
