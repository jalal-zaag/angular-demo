import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AlertComponent } from '../../re-components/alert/alert.component';
import { MyButtonComponent } from '../../re-components/my-button/my-button.component';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, AlertComponent, MyButtonComponent],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string= "Shakib";

  onClick(data: string) {
    console.log(data);
  
  }
}
