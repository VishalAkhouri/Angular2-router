import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {Routes, RouterModule} from "@angular/router";

const APP_ROUTER: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTER);
