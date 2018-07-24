import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  repos:any;
  username:String;

  constructor( private _githubService:GithubService) { 
    // this._githubService.getUser().subscribe(user=>this.user=user.json());
    // this._githubService.getRepos().subscribe(repos=>this.repos=repos.json());
this.user=false;
  }


  ngOnInit() {
  }

  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(user=>this.user=user.json());
    this._githubService.getRepos().subscribe(repos=>this.repos=repos.json());

  }

}
