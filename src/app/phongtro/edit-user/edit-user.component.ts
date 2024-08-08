import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  showMenu: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkUrl(event.urlAfterRedirects);
    });
  }

  checkUrl(url: string) {
    // Ẩn menu nếu URL chứa '/home', hoặc các URL khác bạn muốn ẩn
    this.showMenu = !(url.includes('/home'));
}
  toggleMenu() {
  this.showMenu = !this.showMenu;
  }
}
