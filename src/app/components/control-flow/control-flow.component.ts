import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isDivShow: boolean = false;

  studentList: any[] = [
    { name: 'aaa', city: "dhaka", isActive: true },
    { name: 'bbb', city: "barishal", isActive: true },
    { name: 'ccc', city: "Meghna", isActive: false },
    { name: 'dd', city: "Sylhet", isActive: true },
    { name: 'eee', city: "Raj", isActive: false }
  ]

  divShow(value: boolean) {
    this.isDivShow = value;
  }
}
