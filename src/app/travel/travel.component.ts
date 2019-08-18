import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  @Input() newBird;
  @Output() flyBird = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTap(){
    this.flyBird.emit(this.newBird.birdName);
  }

}
