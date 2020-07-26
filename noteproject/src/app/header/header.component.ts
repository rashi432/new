import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
titleProp;
textProp;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
gotoall(){
  this.route.navigate(['/all'])
  
}
}
