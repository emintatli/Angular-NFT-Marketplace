import { LoginComponent } from './pages/main/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:()=>import("./pages/main/main.module").then(m=>m.MainModule)
  },
  {
    path: 'account',
    loadChildren:()=>import("./pages/account/account.module").then(m=>m.AccountModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
