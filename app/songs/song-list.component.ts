import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { ISong } from './song'
import { SongService } from '../services/song.service';

@Component({
    templateUrl: 'app/songs/song-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class SongListComponent implements OnInit {
    pageTitle: string = 'Playlist';
    
    songs: ISong[];
    json: string;

    constructor(private _SongService: SongService){
    }

    ngOnInit(): void {
       this._SongService.getSongs()
            .subscribe(
                songs => this.songs = songs);
       this._SongService.getJSON()
            .subscribe(
                json => this.json = json);   
    }
}