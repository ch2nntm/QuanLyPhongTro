import { Component } from '@angular/core';

@Component({
  selector: 'app-duyetdonlamchutro',
  templateUrl: './duyetdonlamchutro.component.html',
  styleUrl: './duyetdonlamchutro.component.css'
})
export class DuyetdonlamchutroComponent {
  isRefuse=false;

  infs=[
    {
      id: '483',
      phone: '0939483923',
      name: 'Trần Thị Hà',
      address_user: 'Quy Nhơn',
      email: 'HaTran@gmail.com',
      date: '03/03/2022',
      avt: 'Avatar.png',
      cccd: 'Ellipse.png, profile.png'
    },
    {
      id: '433',
      phone: '0939483453',
      name: 'Huỳnh Hoàng',
      address_user: 'Quy Nhơn',
      email: 'Huynh@gmail.com',
      date: '12/05/2023',
      avt: 'Ellipse.png',
      cccd: ''
    },
    {
      id: '394',
      phone: '0448483453',
      name: 'Nguyễn Lanh',
      address_user: 'Tuy Phước',
      email: 'Lanh394@gmail.com',
      date: '04/09/2022',
      avt: 'Ellipse.png',
      cccd: 'Avatar.png, Ellipse.png, profile.png, inf_register.png'
    }
  ]

  inf_child={
    id:'',
    phone: '',
    name: '',
    address_user: '',
    email: '',
    date: '',
    avt: '',
    cccd: ''
  }
  isClick=false;
  images=[];
  quatity_img=0;

  DetailInf(item: any):void{
    this.inf_child = item;
    this.isClick=true;
    this.quatity_img=0;
    if(item.cccd){
      this.images=item.cccd.split(', ');
    }
    else{
      this.images=[];
    }
    for(var i=0; i<this.images.length; i++){
      this.quatity_img+=1;
    }
    console.log(this.images);
    this.isRefuse=false;
  }

  ChangeImg() {
    if (this.images.length > 0) {
      let firstImage = this.images[0]; 
      this.images.shift();
      this.images.push(firstImage); // Add it to the end of the array
    }
  }

  Refuse(){
    this.isRefuse=!this.isRefuse;
  }

  refuse(item: string){
    const index = this.infs.findIndex(inf => inf.id === item);
    if (index !== -1) {
        this.infs.splice(index, 1);
    }
    this.DetailInf('');
    // window.location.reload();
  }

  CloseDetail(){
    this.isClick=false;
  }
}
