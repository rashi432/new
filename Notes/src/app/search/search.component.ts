import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchtitle;
  filtereddata;
  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.searchtitle = localStorage.getItem('searchtitle');
    this.ds.fetchdata().subscribe((d) => {
      alert('returned data' + JSON.stringify(d));
      const alldata = d.data;
      console.log(alldata);
      this.filtereddata = alldata.filter((p) => {
        // alert("--"+p.city+"-"+this.ct+"--")
        return p.title == this.searchtitle;
      });

      alert('this is filtered' + JSON.stringify(this.filtereddata));
    });
  }
}
