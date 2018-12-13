import { Component } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  user: User;

  constructor() {
    this.user = {
      firstName: "Rimma",
      lastName: "Zun",
      email: "email@domain.com"
    };
  }
}
