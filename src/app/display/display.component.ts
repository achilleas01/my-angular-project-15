import { Component, Input, Output, EventEmitter, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnChanges, OnDestroy {
  @Input() message!: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('The child component has sent a notification!');
  }

  constructor() {
    console.log('DisplayComponent Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('DisplayComponent OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('DisplayComponent OnInit');
  }

  ngOnDestroy(): void {
    console.log('DisplayComponent OnDestroy');
  }

  
}
