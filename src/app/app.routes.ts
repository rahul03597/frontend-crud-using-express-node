import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ViewComponent } from './Components/view/view.component';

export const routes: Routes = [
    {
        path:'home', component:HomeComponent
    },
    {
        path:'product', component:ProductComponent
    },
    {
        path:'add', component:AddProductComponent
    },
    {
        path:'view', component:ViewComponent
    },
    {
        path:'add/:id', component:AddProductComponent
    }
   
];
