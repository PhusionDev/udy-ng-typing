import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sentence: string = lorem.sentence(3);
  userInput: string = '';

  title = 'typing';

  onValueChanged(e: Event) {
    this.userInput = (e.target as HTMLInputElement).value;
  }

  isCorrectSpelling() {
    return this.userInput == this.sentence;
  }

  getLetterColor(i: number): string {
    if (i < this.userInput.length) {
      return this.userInput[i] == this.sentence[i] ? 'green' : 'red';
    }

    return 'black';
  }
}
