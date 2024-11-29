import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpCliente:HttpClient) {

  }

  getAlbumsbyArtits(artist:string){
    let cabecera=new HttpHeaders().set
    ('x-rapidapi-key','528a6b0b56msh7c2d89d57d8706dp1410f9jsnc83b5d080de3')
    .set('x-rapidapi-host','spotify23.p.rapidapi.com');
    return this.httpCliente.get('https://spotify23.p.rapidapi.com/search/?q='+artist+'&type=multi&offset=0&limit=10&numberOfTopResults=5',{
     headers:cabecera
    });
  }

  getAlbums(id:string){
    let cabecera=new HttpHeaders().set
    ('x-rapidapi-key','528a6b0b56msh7c2d89d57d8706dp1410f9jsnc83b5d080de3')
      .set('x-rapidapi-host','spotify23.p.rapidapi.com'); return this.httpCliente.get('https://spotify23.p.rapidapi.com/albums/?ids='+id+'',{
     headers:cabecera
    });
  }
}
