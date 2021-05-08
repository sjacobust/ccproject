import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-verify-news',
  templateUrl: './verify-news.component.html',
  styleUrls: ['./verify-news.component.scss']
})
export class VerifyNewsComponent implements OnInit {

  entities:any = [];
  article:string = "";
  articlesFound:any = [];
  noArticles:boolean = true;

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.entities = [];
    this.article = "";
    this.articlesFound = [];
    this.noArticles = true;
  }

  submitArticle() {
    console.log("submitArticle check");
    this.newsService.verifyNewsArticle(this.article).then(result => {
      let entitiesArray = result.result.entities;
      for(let i = 0; i < entitiesArray.length; i++){
        this.entities.push(entitiesArray[i].text);
      }

      console.log(this.entities);
      
      this.searchArticles(this.entities)
      

    });
  }

  searchArticles(entities:any) {
    this.newsService.searchNews(entities.join(" ")).then(result => {
      console.log(result.articles);
      for(let article of result.articles) {
        this.articlesFound.push(article)
      }
      this.noArticles = false;
    });
  }

}
