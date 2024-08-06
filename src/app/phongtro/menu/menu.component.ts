import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isMenuExpanded = false;

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }
}
