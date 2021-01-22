import { Component, OnInit } from '@angular/core';

import { FiltersService } from '@app/core/services/filters.service';
import { TestedWord } from '@app/model/test-word';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  public words: TestedWord[] = [];

  constructor(private filtersService: FiltersService) {}

  public ngOnInit(): void {
    this.words = this.filtersService.getWordsWithAnswers();
  }
}
