import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ADMIN_PAGE_PATH, CONTROL_FLOW_PATH, DATA_BINDING_PAGE_PATH, USER_PAGE_PATH } from './helpers/Slug';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'demo';
  USER_PAGE_PATH = USER_PAGE_PATH;
  protected readonly ADMIN_PAGE_PATH = ADMIN_PAGE_PATH;
  protected readonly DATA_BINDING_PAGE_PATH = DATA_BINDING_PAGE_PATH;
  protected readonly CONTROL_FLOW_PATH = CONTROL_FLOW_PATH;

  showMessage = () => {
    alert("working")
  }
}
