import {Component, OnInit} from '@angular/core';
import {UserserviceService} from "../userservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string = "";
  public email: string = "";

  constructor(private userService: UserserviceService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("email") !== "Veuillez vous connecter" && localStorage.getItem("email")) {
      this.userService.isConnect();

    } else {
      this.userService.isNoConnect();
    }

  }

  login() {
    this.userService.login$(this.email, this.password, "").subscribe(data => {
      if (data.status === 200) {
        console.log(data)
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", this.email);
        this.userService.isConnect();
      }

    })
  }

  deconnexion() {
    localStorage.setItem("token", "deconnecter")
    localStorage.setItem("email", "Veuillez vous connecter");
    this.userService.isNoConnect()

  }

}
