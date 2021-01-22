import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';

  public toggleControl = new FormControl(false);

  constructor(private overlay: OverlayContainer) {}

  public ngOnInit(): void {
    this.initSubscriptions();
  }

  private initSubscriptions(): void {
    this.toggleControl.valueChanges.subscribe((isDark: boolean) => {
      this.handleToggleChanges(isDark);
    });
  }

  private handleToggleChanges(isDark: boolean): void {
    const darkClassName = 'darkMode';
    this.className = isDark ? darkClassName : '';

    if (isDark) {
      this.overlay.getContainerElement().classList.add(darkClassName);
    } else {
      this.overlay.getContainerElement().classList.remove(darkClassName);
    }
  }
}
