import { TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { ToggleComponent } from '@app/shared/components/toggle/toggle.component';
import { AppComponent } from '@app/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
      ],
      declarations: [
        AppComponent,
        MockComponent(LogoComponent),
        MockComponent(ToggleComponent),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
