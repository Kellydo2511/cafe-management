import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent, MatSidenavModule]
})
export class AppComponent {
  title = 'cafe-management';
}
