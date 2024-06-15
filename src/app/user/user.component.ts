import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  //5 Input properties
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  //6 Output properties
  //The name of property should describe custom event that you want to emit
  // initial value is event emitter object
  // use input, output functions for signal based inputs and outputs
  // select = output<string>()

  @Output() select = new EventEmitter();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    console.log('Emited select user on click', this.user.id);
    //6.1 Emit your custom event with a value in a method
    // that you could use as a handler for regular events (click)
    this.select.emit(this.user.id);
  }
}

// //1.1 create public properties in a class component
// // so you could access its values in the template of the component
// // by using:
// // I string interpolation in template {{}}
// // II property binding syntax:

// //selectedUser = DUMMY_USERS[userIndex];

// //2 Create getters to compute and get values
// // so you could call/access them in components template:

// // get imagePath() {
// //   return `assets/users/${this.selectedUser.avatar}`;
// // }

// //4 use signals for state management
// // 4.1 first set initial value for the signal:
// selectedUser = signal(DUMMY_USERS[userIndex]);
// //4.4 Use computed function to compute value based on signal value
// imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

// onSelectUser() {
//   console.log('click', this.selectedUser().name);
//   const userIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   //this.selectedUser = DUMMY_USERS[userIndex];

//   //4.2 Change value of the signal by using set method
//   this.selectedUser.set(DUMMY_USERS[userIndex]);
// }
