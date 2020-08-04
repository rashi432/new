import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emprop;
  pasprop;

  constructor(private route: Router, private ds: DataService) {}

  ngOnInit(): void {}

  login() {
    this.ds
      .login1({ email: this.emprop, password: this.pasprop })
      .subscribe((response) => {
        if (response.status == 'ok') {
          localStorage.setItem('name', response.data[0].name);
          localStorage.setItem('email', response.data[0].email);

          this.route.navigate(['/header']);
        } else {
          alert('Undefined Arguments!');
        }
      });
  }
}
