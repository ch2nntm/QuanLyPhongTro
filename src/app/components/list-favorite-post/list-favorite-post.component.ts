import { Component } from '@angular/core';

@Component({
  selector: 'app-list-favorite-post',
  templateUrl: './list-favorite-post.component.html',
  styleUrl: './list-favorite-post.component.css'
})
export class ListFavoritePostComponent {
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

  isLike(){
    
  }

  constructor(){
  }
}
