import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostsService } from '../../services/post/posts.service';

@Component({
  selector: 'app-uiadmin',
  templateUrl: './uiadmin.component.html',
  styleUrl: './uiadmin.component.css'
})
export class UIAdminComponent {
  startPrice=0;
  endPrice=50000000;
  startAcreage=0;
  endAcreage=150;
  selectedTypeHome: string = '';
  searchTypeHome: string='Tất cả';
  isClickSearch: boolean=false;
  isClickBtnKind: boolean=false;
  isClickBtnAddress: boolean=false;
  isClickBtnAcreage: boolean=false;
  isClickBtnPrice: boolean=false;
  isClickBtnFilter: boolean=false;
  activeItem: string | null = null;

  private apiUrl = 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json';

  constructor() {
   }

  ngOnInit(): void {
  }

  ToggleArrowKind(item: string) {
    const button = document.getElementById('dropdownMenuButton1');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnKind=!this.isClickBtnKind;
    }
  }

  ToggleArrowAddress(item: string) {
    const button = document.getElementById('dropdownMenuButton2');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnAddress=!this.isClickBtnAddress;
    }
  }

  ToggleArrowAcreage(item: string) {
    const button = document.getElementById('dropdownMenuButton3');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnAcreage=!this.isClickBtnAcreage;
    }
  }

  ToggleArrowPrice(item: string) {
    const button = document.getElementById('dropdownMenuButton4');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnPrice=!this.isClickBtnPrice;
    }
  }

  ToggleArrowFilter(item: string) {
    const button = document.getElementById('dropdownMenuButton5');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnFilter=!this.isClickBtnFilter;
    }
  }

  UpdateTypeHome(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedTypeHome = inputElement.value;
  }

  SearchTypeHome(event: Event){
    this.searchTypeHome=this.selectedTypeHome;
    this.isClickSearch = true;
  }

  ResetTypeHome(){
    this.searchTypeHome='Tất cả';
  }

  SetAllPrice(){
    this.startPrice=0;
    this.endPrice=50000000;
  }

  SetPriceRange(start: number, end: number) {
    this.startPrice = start;
    this.endPrice = end;
  }

  SetAllAcreage(){
    this.startAcreage=0;
    this.endAcreage=150;
  }

  SetAcreageRange(start: number, end: number) {
    this.startAcreage = start;
    this.endAcreage = end;
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

  isclickHome=false;
  clickHome(){
    this.isclickHome=true;
  }
}
