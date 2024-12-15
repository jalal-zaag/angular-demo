import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  standalone: true,
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName:string = "angular full course";
}
