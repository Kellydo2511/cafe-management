import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterLink, RouterLinkActive]
})
export class SidebarComponent {
toggleSidebar() {
throw new Error('Method not implemented.');
}
isSidebarVisible: any;
}
