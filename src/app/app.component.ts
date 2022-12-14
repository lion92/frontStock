import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserserviceService} from "./userservice.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
 public title = 'stock';
 public email:string="";

  constructor(public userSerVice:UserserviceService,private router:Router) {
    this.email=""+localStorage.getItem("email");
  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {


  }
  rechargeClick() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./login'])
  }
}
