import {Component, OnInit} from '@angular/core';
import {TokenInitDataService} from "./service/token-init.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ListatSoftware';




  flagCreate:boolean = false;

  constructor(public  tokenInitDataService:TokenInitDataService) {

  }

  ngOnInit(): void {

  }


}
