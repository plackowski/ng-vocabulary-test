import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';

import { StateService } from '@app/core/services/state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update isTestReady if needed', async () => {
    const currentStatus = await service
      .isTestReadyToStart()
      .pipe(take(1))
      .toPromise();
    expect(currentStatus).toBe(false);

    service.markTestAsReady();

    service.isTestReadyToStart().subscribe((isTestReady: boolean) => {
      expect(isTestReady).toBe(true);
    });
  });
});
