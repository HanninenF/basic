import { Component, computed, input, model, output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.html',
  styleUrls: ['./toggle.scss'],
})
export class Toggle {
  public isOn = model<boolean>(true);
  public label = computed(() => (this.isOn() ? 'ON' : 'OFF'));

  private counter = 0;
  public toggleHandler(): void {
    this.isOn.update((v) => !v);
    this.counter++;
    this.logCounter();
    this.resetIfMax();
  }

  /*   public get label(): string {
    return this.isOn() ? 'ON' : 'OFF';
  } */
  private resetIfMax(): void {
    if (this.counter >= 10) {
      this.counter = 0;
    }
  }

  private logCounter(): void {
    console.log(this.counter);
  }
}
