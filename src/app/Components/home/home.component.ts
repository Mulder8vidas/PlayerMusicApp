import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SpotifyService} from '../../Services/spotify.service';
import {AlbumsModels} from '../models/albumsModels';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ArtistaModel} from '../models/artistaModel';

@Component({
  selector: 'app-home',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  providers: [SpotifyService]
})
export class HomeComponent {
  Busqueda: FormGroup;
  albums:AlbumsModels|any=null;
  tracks:ArtistaModel|any=null;
  constructor( private apiService: SpotifyService) {
    this.Busqueda = new FormGroup({
      'busqueda': new FormControl('')
    });
  }

  buscar() {
    this.apiService.getAlbumsbyArtits(this.Busqueda.getRawValue().busqueda).subscribe((data:any)=>{
      this.albums=data;
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
}}
