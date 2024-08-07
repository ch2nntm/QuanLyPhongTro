import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uiuser',
  templateUrl: './uiuser.component.html',
  styleUrl: './uiuser.component.css'
})
export class UIUserComponent implements OnInit{
  title = 'VD_material';
  start_price=0;
  end_price=50000000;
  start_acreage=0;
  end_acreage=150;
  selectedTypeHome: string = '';
  searchTypeHome: string='Tất cả';
  click_Search: boolean=false;
  isclick_btnKind=false;
  isclick_btnAddress=false;
  isclick_btnAcreage=false;
  isclick_btnPrice=false;
  isclick_btnFilter=false;
  activeItem: string | null = null;
  name: string='';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    var namefull='';
    this.route.queryParams.subscribe(params => {
      namefull = params['name'];
    });
    this.name = namefull;
  }

  toggleArrowKind(item: string) {
    const button = document.getElementById('dropdownMenuButton1');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnKind=!this.isclick_btnKind;
    }
  }

  toggleArrowAddress(item: string) {
    const button = document.getElementById('dropdownMenuButton2');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnAddress=!this.isclick_btnAddress;
    }
  }

  toggleArrowAcreage(item: string) {
    const button = document.getElementById('dropdownMenuButton3');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnAcreage=!this.isclick_btnAcreage;
    }
  }

  toggleArrowPrice(item: string) {
    const button = document.getElementById('dropdownMenuButton4');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnPrice=!this.isclick_btnPrice;
    }
  }

  toggleArrowFilter(item: string) {
    const button = document.getElementById('dropdownMenuButton5');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnFilter=!this.isclick_btnFilter;
    }
  }

  updateTypeHome(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedTypeHome = inputElement.value;
  }

  Search_TypeHome(event: Event){
    this.searchTypeHome=this.selectedTypeHome;
    this.click_Search = true;
  }

  Reset_TypeHome(){
    this.searchTypeHome='Tất cả';
  }

  setAllPrice(){
    this.start_price=0;
    this.end_price=50000000;
  }

  setPriceRange(start: number, end: number) {
    this.start_price = start;
    this.end_price = end;
  }

  setAllAcreage(){
    this.start_acreage=0;
    this.end_acreage=150;
  }

  setAcreageRange(start: number, end: number) {
    this.start_acreage = start;
    this.end_acreage = end;
  }

  // Amdin
  isMenuExpanded = false;
  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }


  name_page='';
  click_page=false;
  getLinkContent(event: Event) {
    const target = event.target as HTMLElement;
    this.name_page = target.textContent?.trim() || '';
    this.click_page=true;
  }

 
}
