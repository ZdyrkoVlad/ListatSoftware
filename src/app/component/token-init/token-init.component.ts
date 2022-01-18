import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenInitDataService} from "../../service/token-init.service";
import {TokenInitData} from "../../dao/tokenInitData";

import {
  MatSnackBar

} from '@angular/material/snack-bar';


@Component({
  selector: 'app-token-init',
  templateUrl: './token-init.component.html',
  styleUrls: ['./token-init.component.css']
})
export class TokenInitComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private tokenInitDataService: TokenInitDataService,
              private _snackBar: MatSnackBar) {
  }

  submitted = false;

  tokenCrateForm = new FormGroup({
    Company: new FormControl('Company', [Validators.required]),
    TokenName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    TokenSymbol: new FormControl('', [Validators.required, Validators.minLength(1)]),
    MaxTokenSupply: new FormControl('', [Validators.required, Validators.minLength(1)]),
    BlochainMetod: new FormControl('Ethereum', [Validators.required]),
    Supply: new FormControl(false, [Validators.required])
  });

  get f(): { [key: string]: AbstractControl } {
    return this.tokenCrateForm.controls;
  }

  onSubmit() {
    console.log("ON SUBMIT")

    this.submitted = true;

    // stop here if form is invalid
    if (this.tokenCrateForm.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.tokenCrateForm.value, null, 4));

    let newTokenData: TokenInitData = new TokenInitData();
    newTokenData.company = this.tokenCrateForm.get('Company')?.value;
    newTokenData.tokenName = this.tokenCrateForm.get('TokenName')?.value;
    newTokenData.Symbol = this.tokenCrateForm.get('TokenSymbol')?.value;
    newTokenData.maximumTokenSupply = this.tokenCrateForm.get('MaxTokenSupply')?.value;
    newTokenData.blochainMetod = this.tokenCrateForm.get('BlochainMetod')?.value;
    newTokenData.supply = this.tokenCrateForm.get('Supply')?.value;

    this.tokenInitDataService.tokenCreateDataStore = newTokenData;
    this.openSnackBar();
    this.tokenInitDataService.flagCreate = true;


  }

  openSnackBar() {
    this._snackBar.open('preview', undefined,{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500
    });
  }

  ngOnInit(): void {
    this.tokenCrateForm = this.formBuilder.group(
      {
        Company: ['', Validators.required],
        TokenName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)
          ]
        ],
        TokenSymbol: ['', [Validators.required, Validators.minLength(2)]],
        MaxTokenSupply: [
          '',
          [
            Validators.required,
            Validators.minLength(2)

          ]
        ],
        BlochainMetod: ['Ethereum', Validators.required],
        Supply: [false, Validators.requiredTrue],

      },
      {
        // validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

}
