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

  //Un cycle de vie est un ensemble d'événements qui se produisent dans l'ordre suivant:
  //1. ngOnInit: est appelé après que le composant ait été initialisé
  //2. ngOnChanges: est appelé lorsque les propriétés d'un composant changent
  //3. ngDoCheck: est appelé à chaque fois que le changement de propriétés est détecté
  //4. ngAfterContentInit: est appelé après que le contenu du composant ait été initialisé
  //5. ngAfterContentChecked: est appelé après que le contenu du composant ait été vérifié
  //6. ngAfterViewInit: est appelé après que la vue du composant ait été initialisé
  //7. ngAfterViewChecked: est appelé après que la vue du composant ait été vérifié
  //8. ngOnDestroy: est appelé avant que le composant soit détruit
}

