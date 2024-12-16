import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AlertComponent } from '../../re-components/alert/alert.component';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, AlertComponent],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string= "Shakib";
}
