import { Component } from '@angular/core';
import { ServerStatusComponent } from "../dashboard/server-status/server-status.component";
import { TrafficComponent } from "../dashboard/traffic/traffic.component";
import { TecketsComponent } from "../dashboard/teckets/teckets.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
