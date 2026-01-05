import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name: string = 'John Doe';
  myNumber: number = 0;

  photo: string = 'favicon.ico';

  increment() {
    this.myNumber++;
  }

  decrement() {
    this.myNumber--;
  }
}
