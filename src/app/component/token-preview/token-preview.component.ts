import {Component, OnInit} from '@angular/core';
import {TokenInitData} from "../../dao/tokenInitData";
import {TokenInitDataService} from "../../service/token-init.service";

@Component({
  selector: 'app-token-preview',
  templateUrl: './token-preview.component.html',
  styleUrls: ['./token-preview.component.css']
})
export class TokenPreviewComponent implements OnInit {


  tokenInitData: TokenInitData = this.tokenInitDataService.tokenCreateDataStore;

  constructor(private tokenInitDataService: TokenInitDataService) {

    console.log("this.TokenPreviewComponent constructor", this.tokenInitData);

  }


  clean(){
    this.tokenInitDataService.flagCreate = false;
    this.tokenInitDataService.tokenCreateDataStore= new TokenInitData();

  }

  ngOnInit(): void {

    console.log("this.TokenPreviewComponent", this.tokenInitData);

  }

}
