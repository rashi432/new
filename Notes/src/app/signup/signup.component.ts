import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  nameprop;
  emailprop;
  passprop;

  constructor(private route: Router, private ds: DataService) {}

  ngOnInit(): void {}

  signup() {
    this.ds.sign1({
      name: this.nameprop,
      email: this.emailprop,
      password: this.passprop,
    });
   .subscribe ((response) => {
    if (response.status == "ok") {

      alert(" Registration Successful!");

      this.route.navigate(['/login']);
    }

    else{
      alert("Couldn't Register");
    }
   });
  }
}
