import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularNews: any = {
    title: "",
    author: "",
    content: "",
    description: "",
    date: "",
    url: "",
    img: ""
  };

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getPopularNews('us').then((result: any) => {
      console.log(result.articles);
      this.popularNews = result.articles;
    }).catch(error => {
      console.log(error);
    });
  }

  changeCountry(country: any) {
    this.newsService.getPopularNews(country).then((result: any) => {
      console.log(result.articles);
      this.popularNews = result.articles;
    }).catch(error => {
      console.log(error);
    });
  }

  search(data:any) {
    this.newsService.searchNews(data).then(result => {
      this.popularNews = result.articles;
    })
  }
}
