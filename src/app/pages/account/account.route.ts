import { AccountComponent } from './account.component';
import { CreateComponent } from './create/create.component';
import { BuyComponent } from './buy/buy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
        path: '',
        canActivate: [AuthGuard],
        component:AccountComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'create', component: CreateComponent },
        ],
    },
    { path: 'buy/:id', component: BuyComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRoutingModule {}
