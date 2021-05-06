import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "./../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiGatewayUrl:string = environment.apiUrl + "/noticias";
  private newsApiUrl:string = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.newsApiKey}`;

  constructor(private httpClient:HttpClient) { }

  getPopularNews() {
    return this.httpClient.get(this.newsApiUrl).toPromise();
  }
}
