import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SpotifyService} from '../../Services/spotify.service';
import {AlbumsModels} from '../models/albumsModels';
import {JsonPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ArtistaModel} from '../models/artistaModel';
import {DefaultViewComponent} from '../default-view/default-view.component';
import {data} from 'autoprefixer';
import {document} from 'postcss';


@Component({
  selector: 'app-home',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    NgOptimizedImage,
    DefaultViewComponent,
    JsonPipe
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  providers: [SpotifyService]
})
export class HomeComponent implements OnInit{
  Busqueda: FormGroup;
  albums:AlbumsModels|any=null;
  tracks:ArtistaModel|any=null;
  busquedaState=false;
  misCanciones:any[]=[]
  constructor( private apiService: SpotifyService) {
    this.Busqueda = new FormGroup({
      'busqueda': new FormControl('')
    });
  }

  buscar() {
    this.apiService.getAlbumsbyArtits(this.Busqueda.getRawValue().busqueda).subscribe((data:any)=>{
      this.albums=data;
      if (this.albums!=null){
        this.busquedaState=true;

      }
  })
}

  cargarCanciones(uri: string) {
    let uriId = uri.split(':')[2];
    this.apiService.getAlbums(uriId).subscribe((data:any)=>{
      this.tracks=data;

      setTimeout(()=>{
        // @ts-ignore
        document.querySelector('#canciones').scrollIntoView({behavior: 'smooth'});

      },1000)
    })
}

  handler($event: any) {
    console.log($event);
    let misCanciones = localStorage.getItem('cancion');

    if (misCanciones != null) {
      this.misCanciones = JSON.parse(misCanciones);
      const index = this.misCanciones.findIndex(
        (cancion) => cancion.preview_url === $event.preview_url
      );

      if (index !== -1) {
        this.misCanciones.splice(index, 1);
      }

      this.misCanciones.unshift($event);
    } else {
      this.misCanciones = [$event];
    }

    localStorage.setItem('cancion', JSON.stringify(this.misCanciones));
  }

  ngOnInit(): void {
    // @ts-ignore
    let misCanciones=(localStorage.getItem('cancion'));
    if (misCanciones!=null){
      this.misCanciones=JSON.parse(misCanciones);
  }}

}
