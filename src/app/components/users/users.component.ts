import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loading: boolean = true;
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: "Rimma",
          lastName: "Zun",
          age: 64,
          address: {
            street: "841 Ridge Road",
            city: "Highland Park",
            state: "IL"
          },
          isActive: true,
          registered: new Date("01/02/2018 08:30:00")
        },
        {
          firstName: "Rimma",
          lastName: "Zun",
          age: 64,
          address: {
            street: "841 Ridge Road",
            city: "Highland Park",
            state: "IL"
          },
          isActive: false,
          registered: new Date("03/011/2017 07:20:00")
        },
        {
          firstName: "Rimma",
          lastName: "Zun",
          age: 64,
          address: {
            street: "841 Ridge Road",
            city: "Highland Park",
            state: "IL"
          },
          isActive: true,
          registered: new Date("11/02/2016 10:30:00")
        },
        {
          firstName: "Rimma",
          lastName: "Zun"
        }
      ];
      this.loading = false;
    }, 500);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
