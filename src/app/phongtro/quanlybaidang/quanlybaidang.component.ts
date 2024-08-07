import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quanlybaidang',
  templateUrl: './quanlybaidang.component.html',
  styleUrl: './quanlybaidang.component.css'
})
export class QuanlybaidangComponent implements OnInit{
  quantityAll=0;
  quantityActive=0;
  quantityBan=0;


  items = [
    { label: 'Tất cả', status: 'all' },
    { label: 'Hoạt động', status: 'active' },
    { label: 'Bị cấm', status: 'ban' }
  ];

  posts = [
    {
      imgSrc: 'public/pic_rent2.png',
      quantity: 10,
      title: 'Lộ diện top 5 khu vực "hot" nhất để thuê phòng trọ tại TPHCM',
      address: 'Cầu Giấy, Hà Nội',
      price: '10 triệu/ tháng',
      area: 40,
      id: '746758',
      date: '7/9/2024',
      status: 'active',
      checked: false
    },
    {
      imgSrc: 'public/pic_rent3.png',
      quantity: 10,
      title: 'Lộ diện top 5 khu vực "hot" nhất để thuê phòng trọ tại TPHCM',
      address: 'Cầu Giấy, Hà Nội',
      price: '10 triệu/ tháng',
      area: 40,
      id: '746785',
      date: '7/9/2024',
      status: 'ban',
      checked: true
    },
    {
      imgSrc: 'public/pic_rent1.png',
      quantity: 10,
      title: 'Lộ diện top 5 khu vực "hot" nhất để thuê phòng trọ tại TPHCM. Lộ diện top 5 khu vực "hot" nhất để thuê phòng trọ tại TPHCM. Lộ diện top 5 khu vực "hot" nhất để thuê phòng trọ tại TPHCM',
      address: 'Cầu Giấy, Hà Nội',
      price: '10 triệu/ tháng',
      area: 40,
      id: '746788',
      date: '7/9/2024',
      status: 'ban',
      checked: true
    }
  ];

  filteredPosts = this.posts;
  selectedItem = this.items[0];
  

  onSelect(item: any): void {
    this.selectedItem = item;
  }

  searchId='';

  itemClick='all';
  
  filterItems(item: any): void {
    this.selectedItem = item;
    this.filteredPosts = this.posts;
    if (item.status === 'active') {
      this.filteredPosts = this.posts.filter(post => post.status === 'active');
    } else if (item.status === 'ban') {
      this.filteredPosts = this.posts.filter(post => post.status === 'ban');
    }
    for(var i=0; i<this.posts.length; i++)
      this.posts[i].checked=false;
    this.selectedCount=0;
    this.itemClick=item.status;
  }

  searchID(): void {
    if(this.itemClick=='all'){
      if (this.searchId.trim() !== '') {
        this.filteredPosts = this.posts.filter(post => post.id === this.searchId);
      } else {
          this.filteredPosts = this.posts; 
      }
    }
    else if(this.itemClick=='active'){
      if (this.searchId.trim() !== '') {
        this.filteredPosts = this.posts.filter(post => post.id === this.searchId && post.status === 'active');
      } else {
        this.filteredPosts = this.posts.filter(post => post.status === 'active');
      }
    }
    else if(this.itemClick=='ban'){
      if (this.searchId.trim() !== '') {
        this.filteredPosts = this.posts.filter(post => post.id === this.searchId && post.status === 'ban');
      } else {
        this.filteredPosts = this.posts.filter(post => post.status === 'ban');
      }
    }
  }

  selectedCount=0;

  onCheckboxChange(): void {
    this.selectedCount = this.posts.filter(post => post.checked).length;
  }

  SoLuong() {
    this.selectedCount = 0;
    this.quantityActive = 0;
    this.quantityAll = 0;
    this.quantityBan = 0;
    for (let post of this.posts) {
        if (post.checked === true) {
            this.selectedCount += 1;
        }
        if (post.status === 'active') {
            this.quantityActive += 1;
        } else if (post.status === 'ban') {
            this.quantityBan += 1;
        }
        this.quantityAll += 1;
    }
    this.items = [
        { label: 'Tất cả (' + this.quantityAll + ')', status: 'all' },
        { label: 'Hoạt động (' + this.quantityActive + ')', status: 'active' },
        { label: 'Bị cấm (' + this.quantityBan + ')', status: 'ban' }
    ];
    this.selectedItem = this.items[0];
  }

  constructor() {
    this.SoLuong();
  }

  isMenuExpanded = false;

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  ngOnInit(): void { }

  Delete(item: string) {
    const confirmed = window.confirm('Bạn có chắc chắn muốn xoá bài đăng này không?');
    if(confirmed){
      const index = this.posts.findIndex(post => post.id === item);
      if (index !== -1) {
          this.posts.splice(index, 1);
      }
      this.SoLuong();
    }
  }

  DeleteAll() {
    const confirmed = window.confirm('Bạn có chắc chắn muốn xoá những bài đăng này không?');
    if(confirmed){
      for (let i = this.posts.length - 1; i >= 0; i--) {
        if (this.posts[i].checked) {
            this.posts.splice(i, 1);
        }
      }
      this.SoLuong();
    }
  }

}
