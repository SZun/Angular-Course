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
  currentClasses = {};
  currentStyles = {};

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
          image: "http://lorempixel.com/600/600/people/3",
          isActive: true,
          balance: 100,
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
          image: "http://lorempixel.com/600/600/people/2",
          isActive: false,
          balance: 200,
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
          image: "http://lorempixel.com/600/600/people/1",
          isActive: true,
          balance: 50,
          registered: new Date("11/02/2016 10:30:00")
        },
        {
          firstName: "Rimma",
          lastName: "Zun"
        }
      ];
      this.loading = false;
    }, 500);

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      "big-text": this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? "0" : "40px",
      "font-size": this.showExtended ? "40px" : "0"
    };
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
