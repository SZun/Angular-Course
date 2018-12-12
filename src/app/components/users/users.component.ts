import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "Rimma",
      lastName: "Zun",
      age: 64,
      address: {
        street: "841 Ridge Road",
        city: "Highland Park",
        state: "IL"
      }
    };
  }
}
