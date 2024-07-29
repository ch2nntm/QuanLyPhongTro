import { Component } from '@angular/core';

@Component({
  selector: 'app-quanlybaidang',
  templateUrl: './quanlybaidang.component.html',
  styleUrl: './quanlybaidang.component.css'
})
export class QuanlybaidangComponent {
  quatityAll=0;
  quatityActive=0;
  quatityBan=0;

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
  // searchID(): void {
  //   if (this.searchId.trim() !== '') {
  //       this.filteredPosts = this.posts.filter(post => post.id === this.searchId);
  //   } else {
  //       this.filteredPosts = this.posts; 
  //   }
  // }

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

  constructor() {
    for(var i=0; i<this.posts.length; i++){
      if(this.posts[i].checked===true)
        this.selectedCount+=1;
    }

    for(var i=0; i<this.posts.length; i++){
      if(this.posts[i].status=='active'){
        this.quatityActive+=1;
        this.quatityAll+=1;
      }
      else{
        this.quatityAll+=1;
        this.quatityBan+=1;
      }
    }
    this.items=[
      { label: 'Tất cả'+ '(' + this.quatityAll + ')', status: 'all' },
      { label: 'Hoạt động'+ '(' + this.quatityActive + ')', status: 'active' },
      { label: 'Bị cấm'+ '(' + this.quatityBan + ')', status: 'ban' }
    ];

    this.selectedItem=this.items[0];
  }

  paginatedItems: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  

  ngOnInit() {}
}
