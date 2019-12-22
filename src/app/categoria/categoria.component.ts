import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service'
import { Genre } from '../models/genre.model'
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  lstGenres:Genre[]
  addGenre:any={
		gen_title:''
	}
  constructor(private _GenreService:GenreService){

  }
  private delay(ms: number)
 {
   return new Promise(resolve => setTimeout(resolve, ms));
 }

 private async sleep()
 {
   await this.delay(1000);
 }
  //objGenre:Genre;
  listgenre(){
    this._GenreService.getGenrer()
      .subscribe
      (
        data=>
        {
          this.lstGenres=data;
          console.log(data);
        }
      );
    }
  addGenres(){
    this._GenreService.createGenrer(this.addGenre)
      .subscribe
      (
        data=>
        {
          this.sleep().then(() => this.listgenre());

        }
      )

  }
  deleteGenrer(id){
    console.log("THIS IS A DELETE FUNCTION");
    this._GenreService.deleteGenrer(id).subscribe(res=>{
      this.sleep().then(() => this.listgenre());
    },
      err=>{
        console.log(JSON.stringify(err));
    });
  }
  //lstgeresporid:Genre[];


  ngOnInit() {
  this.listgenre();

      /*this._GenreService.getGenderByParamameter()
        .subscribe
        (
          data=>
          {
            this.lstgeresporid=data;
            console.log(data);
          }
        );*/
  }

}
