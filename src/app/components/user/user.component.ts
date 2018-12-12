import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  firstName = "John";
  lastName = "Smith";
  age = 30;
  address: {
    street: "50 Main St";
    city: "Boston";
  };

  constructor() {
    // this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }
  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }
  hasBirthday() {
    this.age += 1;
  }
}
