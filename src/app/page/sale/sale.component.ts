import { Component } from '@angular/core';
import { OrderItemComponent } from "./order-item/order-item.component";
import { ContentComponent } from "./content/content.component";
import { HoadonComponent } from "./hoadon/hoadon.component";
import { BanComponent } from "./ban/ban.component";
import { HdbhComponent } from "./hdbh/hdbh.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sale',
    standalone: true,
    templateUrl: './sale.component.html',
    styleUrl: './sale.component.scss',
    imports: [RouterLink, RouterLinkActive, OrderItemComponent, ContentComponent, HoadonComponent, BanComponent, HdbhComponent]
})
export class SaleComponent {

}
