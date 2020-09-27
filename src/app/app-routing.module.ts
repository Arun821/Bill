import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InvoiceComponent } from './admin/invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { RootNavComponent } from './root-nav/root-nav.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  
  {path:'root', component:RootNavComponent,
  children:[
    {path:'admin', component:AdminComponent},
    {path:'invoice', component:InvoiceComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
