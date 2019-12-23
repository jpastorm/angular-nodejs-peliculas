import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service'
import { Genre } from '../models/genre.model'
import { ToastrService } from 'ngx-toastr'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  lstGenres:Genre[]
  constructor(private _GenreService:GenreService,private toastr:ToastrService){
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
  nuevo(){
    this.selectedGenre = new Genre();
  }
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
          this.toastr.success('Fue agregada con exito!','Categoria');
          console.log("LLEGAMOS AMIGOS");
        }
      )

  }
  deleteGenrer(id){
    Swal.fire({
  title: 'Are you sure?',
  text: 'You will not be able to recover this imaginary file!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it',
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://thumbs.gfycat.com/AccurateAgreeableDairycow-small.gif")
    left top
    no-repeat
  `
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Deleted!',
      'Your imaginary category has been deleted.',
      'success'
    )
    console.log("THIS IS A DELETE FUNCTION");
    this._GenreService.deleteGenrer(id).subscribe(res=>{
      this.sleep().then(() => this.listgenre());
      this.toastr.error('Fue eliminada :(( ','Categoria');
      this.selectedGenre=new Genre();
    },
      err=>{
        console.log(JSON.stringify(err));
    });
  // For more information about handling dismissals please visit
  // https://sweetalert2.github.io/#handling-dismissals
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Your imaginary category is safe :)',
      'error'
    )
  }
})



  }
  updateGenreId(id){
    this._GenreService.updateGenre(id,this.selectedGenre)
      .subscribe
      (
        data=>
        {
          this.sleep().then(() => this.listgenre());
          this.selectedGenre=new Genre();
          this.toastr.info('Fue Actualizada :0 ','Categoria');
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
