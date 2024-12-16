import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  standalone: true,
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "angular full course";

  btnClicked = () => {
    this.courseName = "the button is clicked"
  }

}
