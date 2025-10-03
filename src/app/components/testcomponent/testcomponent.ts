import { Component } from '@angular/core';
import { Toggle } from '../toggle/toggle';

@Component({
  selector: 'testComponent',
  standalone: true,
  imports: [Toggle],
  templateUrl: './testComponent.html',
  styleUrls: ['./testComponent.scss'],
})
export class TestComponent {
  startValue = true;
  handleSubmit(event: Event) {
    event.preventDefault();
  }
}
