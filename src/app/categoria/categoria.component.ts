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
  selectedGenre:Genre = new Genre();
  selectgenre(listgenres:Genre){
    this.selectedGenre=listgenres;
  }
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
    this._GenreService.createGenrer(this.selectedGenre)
      .subscribe
      (
        data=>
        {
          this.sleep().then(() => this.listgenre());
          this.selectedGenre=new Genre();
          console.log("LLEGAMOS AMIGOS");
        }
      )

  }
  deleteGenrer(id){
    if(confirm('Are u sure to delete it?')){
      console.log("THIS IS A DELETE FUNCTION");
      this._GenreService.deleteGenrer(id).subscribe(res=>{
        this.sleep().then(() => this.listgenre());
      },
        err=>{
          console.log(JSON.stringify(err));
      });
    }

  }
  updateGenreId(id){
    this._GenreService.updateGenre(id,this.selectedGenre)
      .subscribe
      (
        data=>
        {
          this.sleep().then(() => this.listgenre());
          this.selectedGenre=new Genre();
          console.log("LLEGAMOS a actualizar");
        }
      )
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
