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
  enableAdd: boolean = false;

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
          }
        },
        {
          firstName: "Rimma",
          lastName: "Zun",
          age: 64,
          address: {
            street: "841 Ridge Road",
            city: "Highland Park",
            state: "IL"
          }
        },
        {
          firstName: "Rimma",
          lastName: "Zun",
          age: 64,
          address: {
            street: "841 Ridge Road",
            city: "Highland Park",
            state: "IL"
          }
        },
        {
          firstName: "Rimma",
          lastName: "Zun"
        }
      ];
      this.loading = false;
    }, 2000);

    // this.addUser({
    //   firstName: "Rimma",
    //   lastName: "Zun"
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
