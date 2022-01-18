import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TokenInitComponent} from './component/token-init/token-init.component';
import {AppRoutingModule} from "./app-routing.module";
import {FooterComponent} from './component/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { TokenPreviewComponent } from './component/token-preview/token-preview.component';
import {MatCardModule} from '@angular/material/card';
import {TokenInitDataService} from "./service/token-init.service";
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TokenInitComponent,
    FooterComponent,
    TokenPreviewComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSnackBarModule
  ],

  bootstrap: [AppComponent],
  providers: [TokenInitDataService]
})
export class AppModule {
}
