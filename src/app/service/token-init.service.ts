import {Injectable} from '@angular/core';
import {TokenInitData} from 'src/app/dao/tokenInitData';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class TokenInitDataService {

  tokenCreateDataStore: TokenInitData = new TokenInitData();
  flagCreate: boolean = false;


}
