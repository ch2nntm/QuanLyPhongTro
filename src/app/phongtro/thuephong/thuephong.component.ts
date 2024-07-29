import { Component } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-thuephong',
  templateUrl: './thuephong.component.html',
  styleUrl: './thuephong.component.css'
})
export class ThuephongComponent {
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
  infs=[
    {
      'id': 1,
      'avt': 'Avatar.png',
      'name':'Trần Văn Dụ',
      'des':'Quỹ căn cho thuê từ 1PN - 4PN giá rẻ chỉ 2PN giá chỉ 13 tr/tháng LH 0702 272634',
      'fee': 10,
      'acreage': 40,
      'address': 'Cầu giấy, Hà Nội',
      'img':'pic_rent1.png, pic_rent2.png, pic_rent3.png',
      'time': '04/03/2024',
      'phone': '0493948594',
      'islike': false,
    },
    {
      'id': 2,
      'avt': 'Avatar.png',
      'name':'Trần Văn Dụ',
      'des':'Quỹ căn cho thuê từ 1PN - 4PN giá rẻ chỉ 2PN giá chỉ 13 tr/tháng LH 0702 272634',
      'fee': 10,
      'acreage': 40,
      'address': 'Cầu giấy, Hà Nội',
      'img':'pic_rent1.png, pic_rent2.png, pic_rent3.png',
      'time': '04/03/2024',
      'phone': '0493948594',
      'islike': true,
    }
  ]

  LikeInf(id: number) {
    const item = this.infs.find(inf => inf.id === id);
    if (item) {
      item.islike = !item.islike;
    }
    // console.log("Id " + item?.id + " with like is: " + item?.islike);
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

  constructor(){
  }
}
