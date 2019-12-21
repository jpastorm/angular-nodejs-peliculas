import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service'
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

	addGenre:any={
		gen_title:''
	}
	genres:any;

  constructor(private GenreService:GenreService ) {
  	console.log(this.Getgenres);
  	this.Getgenres();
  }
  Getgenres(){
  	this.GenreService.getGenrer().subscribe(res=>{
  		this.genres=res;
  	},
  	err=>{
  		console.log(JSON.stringify(err));
  	});
  }
  CreateGender(){
  	this.GenreService.createGenrer(this.addGenre).subscribe(res=>{
  		this.Getgenres();
  	},
  	err=>{
  		console.log(JSON.stringify(err));
  	});
  }
  ngOnInit() {

  }

}
