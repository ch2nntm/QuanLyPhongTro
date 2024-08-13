import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  showMenu: boolean = true;
  name: string='';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.CheckUrl(event.urlAfterRedirects);
    });
    var namefull='';
    this.route.queryParams.subscribe(params => {
      namefull = params['name'];
    });
    this.name = namefull;
  }

  CheckUrl(url: string) {
    //Hide menu if URL contains '/home', or other URLs you want to hide
    this.showMenu = !(url.includes('/home'));
  }

  ToggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
