import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css'],
})
export class SaveComponent implements OnInit {
  // titleprop;
  // codeprop;

  constructor(private route: Router, private ds: DataService) {}
  ngOnInit(): void {}

  // secret() {
  //   this.ds
  //     .secret1({ title: this.titleprop, code: this.codeprop })
  //     .subscribe((response) => {
  //       if (response.status == 'ok') {
  //         alert('saved.');
  //         this.route.navigate(['/']);
  //       } else {
  //         alert('Please check again!');
  //       }
  //     });
  // }
}
