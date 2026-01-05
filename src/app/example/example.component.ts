import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

  @Input('name')
  name: string = '';

  age: number = 20;
  isMarried: boolean = false;

  fruits: string[] = ['apple', 'banana', 'cherry'];


}
