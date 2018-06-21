import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Declarations
  title: string;
  envName: string;

  ngOnInit() {
    this.title = 'Welcome to the TFL mobile app';

    this.envName = environment.name;

    // console.log('My environment name is ', environment.name );

  }

}
