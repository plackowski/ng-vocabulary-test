import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { SetupComponent } from '@app/test/setup/setup.component';
import { StateService } from '@app/core/services/state.service';
import { StartComponent } from '@app/test/start/start.component';
import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { TestComponent } from '@app/test/test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;
  let stateService: any;

  beforeEach(
    waitForAsync(() => {
      const stateServiceSpy = jasmine.createSpyObj('StateService', [
        'isTestReadyToStart',
      ]);

      TestBed.configureTestingModule({
        declarations: [
          TestComponent,
          MockComponent(LogoComponent),
          MockComponent(StartComponent),
          MockComponent(SetupComponent),
        ],
        providers: [
          {
            provide: StateService,
            useValue: stateServiceSpy,
          },
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(TestComponent);
          el = fixture.debugElement;
          component = fixture.componentInstance;
          stateService = TestBed.inject(StateService);
        });
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show setup when component is created', () => {
    fixture.detectChanges();
    const setupComponent = el.nativeElement.querySelector('app-setup');
    const startComponent = el.nativeElement.querySelector('app-start');

    expect(setupComponent).toBeDefined();
    expect(startComponent).toBeNull();
  });

  it('should show test start when setup is completed', () => {
    stateService.isTestReadyToStart.and.returnValue(of(true));
    fixture.detectChanges();

    const setupComponent = el.nativeElement.querySelector('app-setup');
    const startComponent = el.nativeElement.querySelector('app-start');

    expect(startComponent).toBeDefined();
    expect(setupComponent).toBeNull();
  });
});
