import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) {	
   }
   getGenrer():Observable<any>{
   	return this.httpClient.get("http://localhost:3000/genres");  	
   }
   createGenrer(genrer:any){
   	let json=JSON.stringify(genrer);
   	let headers=new HttpHeaders().set('Content-Type','application/json');
   	return this.httpClient.post("http://localhost:3000/genres",json,{ headers:headers });
   }
   //deleteGenrer():Observable<any>{
   	//return this.httpClient.get("localhost:3000/genres"+id);  	
   //}
}
