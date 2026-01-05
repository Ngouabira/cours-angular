import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from '../example/example.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning',
  imports: [FormsModule, ExampleComponent, CommonModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {

  name: string = 'John Doe';
  email: string = '';
  myNumber: number = 0;

  photo: string = 'favicon.ico';

  increment() {
    this.myNumber++;
  }

  decrement() {
    this.myNumber--;
  }

  onSubmit(form: any) {
    console.log(form.value);
    for (let key in form.value) {
      console.log(key, form.value[key]);
    }
  }
}

