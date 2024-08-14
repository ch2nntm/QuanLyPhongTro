import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/post/posts.service';
import { Post } from '../../models/post/post';

@Component({
  selector: 'app-roommate-search-detail',
  templateUrl: './roommate-search-detail.component.html',
  styleUrl: './roommate-search-detail.component.css'
})
export class RoommateSearchDetailComponent {
  post: Post={
    "id": 0,
    "title": 'Hi',
    "description": '',
    "acreage": 0,
    "price": 0,
    "contact": '',
    "images": '',
    "address": {
        "province": '',
        "district": '',
        "ward": '',
    },
    "category": {
        "id": 0,
        "name": '',
    },
    "status": '',
    "createDate": new Date(10/10/2022),
    "updateDate": new Date(10/10/2022),
    "user":{
        "address_user": '',
        "name": '',
        "phone": '',
    }
  };
  currentImageIndex = 0;
  like: boolean=false;
  no="public/heart_border_black.png";
  yes="public/heart_blue.png";
  images =  [
    // 'public/pic_rent1.png',
    // 'public/pic_rent2.png',
    // 'public/pic_rent3.png',
    // 'public/pic_rent2.png'
  ];
  img_main='';

  constructor(private route: ActivatedRoute, private _api_post: PostsService){}
  ChangeImg() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.img_main = this.images[this.currentImageIndex];
  }

  Share() {
    const shareUrl = 'https://example.com'; 
    window.open(shareUrl, '_blank'); 
  }

  IsLike(){
    this.like=!this.like;
  }

  Break() {
    var textElement = document.getElementById("des");
    var text = textElement?.innerHTML;
    var ngatDongText = text?.split('. ').join('.<br>') + '';
    if (textElement) {
      textElement.innerHTML = ngatDongText;
    }
  }

  CallPhoneNumber(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_self');
  }

  OpenZaloMessage(phoneNumber: string) {
    window.open(`zalo://chat?to=${phoneNumber}`, '_self');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ShowItem(id);
    this.Break();
  }

  ShowItem(idItem: any){
    this._api_post.DetailPost(idItem).subscribe(
    (response: any) => { 
      this.post = response.results;
      this.img_main=this.post.images[0];
      console.log("Main: ",this.img_main);
      // console.log(this.post);
        // this.images = this.post.images.split(',');
        // console.log("Img: ", this.images);
      // console.log("Img: ",this.post.images);
    });
  }

  GetFullAddress(address: any): string {
    const { province, district, ward, detail } = address;
    return `${district} - ${province}`;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
  }

  ChangeImgLeft() {
    if(this.post.images.length>1){
      if(this.currentImageIndex==0){
        this.currentImageIndex=this.images.length;
      }
        
      this.currentImageIndex = (this.currentImageIndex - 1) % this.images.length;
      this.img_main = this.images[this.currentImageIndex];
    }
  }

  ChangeImgRight() {
    if(this.post.images.length>1){
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.img_main = this.images[this.currentImageIndex];
    }
  }

}
