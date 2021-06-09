import { Component } from '@angular/core';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  numRepos = 0;
  constructor(private home:HomeService ){
  this.home.getData().subscribe(data => {
    this.numRepos=data["public_repos"];
    })
  }

}
