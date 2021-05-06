import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-news',
  templateUrl: './saved-news.component.html',
  styleUrls: ['./saved-news.component.scss']
})
export class SavedNewsComponent implements OnInit {

  notLoggedIn:boolean = true;
  savedNews:any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
