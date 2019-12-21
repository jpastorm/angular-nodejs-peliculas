import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
	{ path: 'categoria', component: CategoriaComponent },
	{ path: 'pelicula', component: PeliculaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
