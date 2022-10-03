import { Injectable } from '@angular/core';
import * as dataArtist from "./artist.json";
@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor() { }

  getArtist(){
    return dataArtist;
  };

  getNewReleases(){
    return fetch("https://platzi-music-api.herokuapp.com/browse/new-releases").then(response => response.json());
  }
  getArtistTopTracks(artistId){
    return fetch(
      `https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`
      ).then(
      response=> response.json()
      );
  }
  getAlbumTracks(albumId) {
    return fetch(`https://platzi-music-api.herokuapp.com/artists/${albumId}/tracks?country=CO`).then(
    response => response.json());
    }
}
