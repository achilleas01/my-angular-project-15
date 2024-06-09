import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firststandalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firststandalone.component.html',
  styleUrls: ['./firststandalone.component.css']
})
export class FirststandaloneComponent {

}
