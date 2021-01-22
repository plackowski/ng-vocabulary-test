import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { MODE } from '@app/model/mode';
import { MESSAGES } from '@app/core/constants/messages';
import { CATEGORY } from '@app/model/category';
import { StateService } from '@app/core/services/state.service';
import { ConfigService } from '@app/core/services/config.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  public readonly MESSAGES = MESSAGES;
  public readonly CATEGORY = CATEGORY;
  public readonly MODE = MODE;

  public FORM_CONTROLS = {
    CATEGORY: 'category',
    LEVEL: 'level',
    MODE: 'mode',
    BASE_SIZE: 'base_size',
  };

  public formGroup: FormGroup;
  public isCategoryDisabled = true;
  public isDisabled = true;
  public categories: number[] = [];
  public levels: number[] = [];

  constructor(
    private configService: ConfigService,
    private stateService: StateService,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.createOptionsList();
    this.createForm();
  }

  private createOptionsList(): void {
    this.categories = this.configService.getCategories();
    this.levels = this.configService.getLevels();
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      [this.FORM_CONTROLS.CATEGORY]: new FormControl('', Validators.required),
      [this.FORM_CONTROLS.LEVEL]: new FormControl('', Validators.required),
      [this.FORM_CONTROLS.MODE]: new FormControl('', Validators.required),
      [this.FORM_CONTROLS.BASE_SIZE]: new FormControl('', Validators.required),
    });
  }

  public onCategoryChange(): void {
    this.isCategoryDisabled = false;
  }

  public onLevelChange(): void {
    this.isDisabled = false;
  }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      this.handleSubmittedForm();
    }
  }

  private handleSubmittedForm(): void {
    this.saveConfig();
    this.stateService.markTestAsReady();
  }

  private saveConfig(): void {
    this.configService.saveConfig({
      ...this.formGroup.value,
      [this.FORM_CONTROLS.BASE_SIZE]: Number(
        this.formGroup.value[this.FORM_CONTROLS.BASE_SIZE]
      ),
    });
  }
}
