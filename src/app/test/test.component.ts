import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { StateService } from '@app/core/services/state.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  public isTestReadyToStart: Observable<boolean>;

  constructor(private stateService: StateService) {}

  public ngOnInit(): void {
    this.isTestReadyToStart = this.stateService.isTestReadyToStart();
  }
}
