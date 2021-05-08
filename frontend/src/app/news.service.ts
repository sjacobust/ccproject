import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from "./../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiGatewayUrl:string = environment.apiUrl + "/noticias";
  private newsApiUrl:string =  `https://newsapi.org/v2/`;
  private localNewsApiUrl:string =  "http://localhost:3000/news"; //
  private verifyNewsUrl:string = environment.verifyNewsUrl;
  private apiKeyQueryParam:string = `&apiKey=${environment.newsApiKey}`

  searchResults:any = new BehaviorSubject<Object>({});

  constructor(private httpClient:HttpClient) { }

  getPopularNews(country:string) {
    return this.httpClient.get(this.newsApiUrl + `top-headlines?country=${country}` + this.apiKeyQueryParam).toPromise();
  }

  verifyNewsArticle(article:string):Promise<any> {
    return this.httpClient.post(this.verifyNewsUrl, { textchido: article }).toPromise();
  }

  searchNews(query:string):Promise<any> {
    //return this.httpClient.get(this.newsApiUrl + `everything?q=${query}` + this.apiKeyQueryParam).toPromise();
    return this.httpClient.get(`${this.localNewsApiUrl}?keyword='${query}'`).toPromise();
  }
}
