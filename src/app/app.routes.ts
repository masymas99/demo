import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MasterOrderComponent } from './components/master-order/master-order.component';
import { OrderDetailsComponent } from './components/OrderDetails/OrderDetails.component';
import { TemplateDerivenFormComponent } from './components/TemplateDerivenForm/TemplateDerivenForm.component';
import { AboutComponent } from './components/About/About.component';
import { ErrorComponent } from './components/Error/Error.component';


export const routes: Routes = [
    {path:'',  redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'products',component:MasterOrderComponent},
    {path:'products/:id',component:OrderDetailsComponent},
    {path:'template',component:TemplateDerivenFormComponent},
    {path:'about',component:AboutComponent},
    {path:'**',component:ErrorComponent}
];
