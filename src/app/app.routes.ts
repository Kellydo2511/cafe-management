import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SaleComponent } from './page/sale/sale.component';
import { BaocaoComponent } from './page/baocao/baocao.component';
import { CategoryComponent } from './page/category/category.component';
import { CustomerComponent } from './page/customer/customer.component';
import { ProductsComponent } from './page/products/products.component';
import { NvComponent } from './page/nv/nv.component';


export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sale', component: SaleComponent },
    { path: 'baocao', component: BaocaoComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'nv', component: NvComponent }
];
