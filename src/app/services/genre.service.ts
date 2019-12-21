import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre.model'
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) {
   }
   getGenrer():Observable<any>{
   	return this.httpClient.get("http://localhost:3000/genres");
   }
   /*createGenrer(oGenre:Genre):Observable<any>{
    return this.httpClient.get("http://localhost:3000/genres",oGenre);
  }*/
    createGenrer(genrer:Genre){
   	let json=JSON.stringify(genrer);
   	let headers=new HttpHeaders().set('Content-Type','application/json');
   	return this.httpClient.post("http://localhost:3000/genres",json,{ headers:headers });
   }

   /*
   getGenderByParamameter():Observable<any>{
     let params1= new HttpParams().set('userId',"1");
     return this.httpClient.get("url",{params:params1});
   }*/
   //deleteGenrer():Observable<any>{
   	//return this.httpClient.get("localhost:3000/genres"+id);
   //}
}
