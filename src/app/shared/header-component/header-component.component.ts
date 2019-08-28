import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.sass']
})
export class HeaderComponentComponent implements OnInit {

  @Output()
  public featureSelected: EventEmitter<string> = new EventEmitter();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
