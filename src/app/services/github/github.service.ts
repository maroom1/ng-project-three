import { Injectable, Pipe } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username:String;
  private client_id = 'a825ef21034c06652408';
  private client_secret='b094f9e6226de0126ba4fb74485780b28f3ada84';
  
  constructor(private _http:Http) {
    console.log('github service ready');
    this.username='bradtraversy';
   }

   getUser() {
    return this._http.get("https://api.github.com/users/"+this.username+"?client_id="+this.client_id+"&client_secret="+this.client_secret);

   }

   getRepos() {
    return this._http.get("https://api.github.com/users/"+this.username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret);

   }

   updateUser(username:String) {
     this.username=username;
   }

  
}
