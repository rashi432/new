import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  titleprop;
  noteprop;
  constructor(private route: Router, private ds: DataService) {}

  ngOnInit(): void {}
  save() {
    this.ds
      .save1({ title: this.titleprop, note: this.noteprop })
      .subscribe((response) => {
        if (response.status == 'ok') {
          alert('Data saved.');
          this.route.navigate(['/save']);
        } else {
          alert('Please check again!');
        }
      });
  }
}
