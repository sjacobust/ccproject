import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() searchEvent = new EventEmitter();

  notLoggedIn:boolean = true;
  searchQ:any = {
    query: ""
  };

  constructor(private router:Router) { }

  

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['search'], { queryParams: this.searchQ })
  }

}
