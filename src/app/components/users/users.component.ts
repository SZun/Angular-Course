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
    age: null,
    address: {
      street: "",
      city: "",
      state: ""
    }
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
          age: 64,
          address: {
            street: "841 Ridge Road",
            city: "Highland Park",
            state: "IL"
          },
          isActive: true,
          registered: new Date("01/02/2018 08:30:00"),
          hide: true
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
          registered: new Date("03/011/2017 07:20:00"),
          hide: true
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
          registered: new Date("11/02/2016 10:30:00"),
          hide: true
        },
        {
          firstName: "Rimma",
          lastName: "Zun"
        }
      ];
      this.loading = false;
    }, 500);
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);
    this.user = {
      firstName: "",
      lastName: "",
      age: null,
      address: {
        street: "",
        city: "",
        state: ""
      }
    };
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
