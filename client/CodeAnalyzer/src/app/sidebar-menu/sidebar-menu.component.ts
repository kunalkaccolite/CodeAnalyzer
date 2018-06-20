import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  sidebarWidth = 4;

  constructor() { }

  ngOnInit() {
  }

  increaseWidth() {
    this.sidebarWidth = 15;
  }

  decreaseWidth() {
    this.sidebarWidth = 4;
  }
}