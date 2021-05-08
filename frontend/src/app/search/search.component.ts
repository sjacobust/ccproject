import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  theresQuery:boolean = false;
  searchedNews:any;

  constructor(private route:ActivatedRoute, private newsService:NewsService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      let query = params['query'];
      if(query) {
        this.theresQuery = true;
        this.newsService.searchNews(query).then(result => {
          this.searchedNews = result.articles;
        }).catch(err => {
          console.log(err);
        });
      } else {
        this.theresQuery = false;
      }
    })
  }

}
