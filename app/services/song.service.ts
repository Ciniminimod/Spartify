import { Injectable } from 'angular2/core';
import { ISong } from '../songs/song';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SongService {
    private _songUrl = '../api/parties/parties.json';
    private _apiUrl = 'http://localhost:5000/parties';
    private requestString = "not recieved";

    constructor(private _http: Http) { }

    getSongs(): Observable<ISong[]> {
        return this._http.get(this._songUrl)
            .map((response: Response) => <ISong[]>response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getJSON(): Observable<string> {
        return this._http.get(this._apiUrl)
            .map((response: Response) => JSON.stringify(response.json()))
            .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}