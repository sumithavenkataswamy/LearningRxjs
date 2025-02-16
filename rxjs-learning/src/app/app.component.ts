import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-learning';

  // 1. Subject and BehaviorSubject are Observables
  // 2. When we create subject we don't required to initialize the value but when we create behaviour subject we have to initialize the value
  // 3. when we subscribe the subject we will receive only the upcoming values only but when we subscribe the behaviour subject we will current value and upcoming values
  // article reference : https://dev.to/revanth_oleti/difference-between-subject-and-behaviorsubject-9g6
  numberSubject = new Subject<number>();
  numberbehaviorSubject = new BehaviorSubject<number>(10);
  constructor() {
    // subject
    this.numberSubject.subscribe((response) => console.log(response)); 
    this.numberSubject.next(1);
    // below new subscript will not print any value at all 
    this.numberSubject.subscribe((response) =>
      console.log(`new subscription`, response)
    );

    // behaviour subject

    this.numberbehaviorSubject.subscribe((response) => console.log(response));
    this.numberbehaviorSubject.next(11);
    // below new subscript will print value as 11, because it's current state value as 11
    this.numberbehaviorSubject.subscribe((response) =>
      console.log(`new behaviour subscription`, response)
    );
  }
}
