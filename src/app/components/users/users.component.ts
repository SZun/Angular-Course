import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  users: User[];
  showExtended: boolean = true;
  loading: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
          firstName: "Rimma",
          lastName: "Zun",
          email: "email@domain.com",
          isActive: true,
          registered: new Date("01/02/2018 08:30:00"),
          hide: true
        },
        {
          firstName: "Rimma",
          lastName: "Zun",
          email: "email@domain.com",
          isActive: false,
          registered: new Date("03/011/2017 07:20:00"),
          hide: true
        },
        {
          firstName: "Rimma",
          lastName: "Zun",
          email: "email@domain.com",
          isActive: true,
          registered: new Date("11/02/2016 10:30:00"),
          hide: true
        },
        {
          firstName: "Rimma",
          lastName: "Zun",
          email: "email@domain.com"
        }
      ];
      this.loading = false;
    }, 500);
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: "",
  //     lastName: "",
  //   email: ""
  //   };
  // }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }
}
