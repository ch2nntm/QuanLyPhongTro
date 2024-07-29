import { Component } from '@angular/core';

@Component({
  selector: 'app-danhsachnguoidung',
  templateUrl: './danhsachnguoidung.component.html',
  styleUrl: './danhsachnguoidung.component.css'
})
export class DanhsachnguoidungComponent {
  items = [
    { label: 'Tất cả', status: 'all' },
    { label: 'Hoạt động', status: 'active' },
    { label: 'Bị khoá', status: 'block' }
  ];

  posts=[
    {
      id: '382',
      avt: 'Avatar.png',
      name: 'Trần Thị Hà',
      phone: '0839473827',
      address: 'Quy Nhon',
      gmail: 'HaTran@gmail.com',
      role: 'user',
      status: 'active',
    },
    {
      id: '386',
      avt: 'profile.png',
      name: 'Trần Thị Thu',
      phone: '0839473899',
      address: 'Quận Gò Vấp, Thành phố Hồ Chí Minh',
      gmail: 'ThuTran21@gmail.com',
      role: 'client',
      status: 'active',
    },
    {
      id: '939',
      avt: 'inf_register.png',
      name: 'Lê Huỳnh',
      phone: '0839473275',
      address: 'Quận Gò Vấp, Thành phố Hồ Chí Minh',
      gmail: 'HuynhLe00@gmail.com',
      role: 'client',
      status: 'block',
    }
  ]

  filteredPosts = this.posts;
  selectedItem = this.items[0];
  selectedCount=0;
  itemClick='all';
  searchId='';
  quatityAll=0;
  quatityActive=0;
  quatityBlock=0;

  filterItems(item: any): void {
    this.selectedItem = item;
    this.filteredPosts = this.posts;
    if (item.status === 'active') {
      this.filteredPosts = this.posts.filter(post => post.status === 'active');
    } else if (item.status === 'block') {
      this.filteredPosts = this.posts.filter(post => post.status === 'block');
    }
  }

  constructor(){
    for(var i=0; i<this.posts.length; i++){
      if(this.posts[i].status=='active'){
        this.quatityActive+=1;
        this.quatityAll+=1;
      }
      else{
        this.quatityAll+=1;
        this.quatityBlock+=1;
      }
    }
    this.items=[
      { label: 'Tất cả'+ '(' + this.quatityAll + ')', status: 'all' },
      { label: 'Hoạt động'+ '(' + this.quatityActive + ')', status: 'active' },
      { label: 'Bị cấm'+ '(' + this.quatityBlock + ')', status: 'block' }
    ];

    this.selectedItem=this.items[0];
  }

}
