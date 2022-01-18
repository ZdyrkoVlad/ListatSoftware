import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TokenInitComponent} from "./component/token-init/token-init.component";



const appRoutes: Routes = [
  {path: '', component: TokenInitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
