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
  posts: Post[] = [];
  currentImageIndex = 0;
  like: boolean=false;
  no="public/heart_border_black.png";
  yes="public/heart_blue.png";
  images = [
    'public/pic_rent1.png',
    'public/pic_rent2.png',
    'public/pic_rent3.png',
    'public/pic_rent2.png'
  ];
  img_main=this.images[0];

  constructor(private route: ActivatedRoute, private _api_post: PostsService){}
  ChangeImg() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.img_main = this.images[this.currentImageIndex];
  }

  Share() {
    const shareUrl = 'https://example.com'; // Đường dẫn chia sẻ của bạn
    window.open(shareUrl, '_blank'); // Mở cửa sổ mới để chia sẻ
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
    // Xử lý logic khi người dùng click vào số điện thoại
    // Ví dụ: Mở số điện thoại để gọi (trên điện thoại di động) hoặc chuyển hướng đến một URL
    window.open(`tel:${phoneNumber}`, '_self');
  }

  OpenZaloMessage(phoneNumber: string) {
    // Xử lý logic khi người dùng click vào nút "Nhắn tin Zalo"
    // Mở ứng dụng Zalo và chuyển hướng đến giao diện nhắn tin với số điện thoại cụ thể
    window.open(`zalo://chat?to=${phoneNumber}`, '_self');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("IDDD: ",id);
    this._api_post.DetailPost(id).subscribe(
      (response: any) => { 
        console.log("ID: ",id);
        this.posts = response;
        console.log("PostItem: ",this.posts);
      });
    // this.ShowItem(id);
    this.Break();
  }

  ShowItem(iditem: any){
    this._api_post.DetailPost(iditem).subscribe(
    (response: any) => { 
      console.log("ID: ",iditem);
      this.posts = response;
      console.log("PostItem: ",this.posts);
    });
  }

  ChangeImgLeft() {
    if(this.currentImageIndex==0){
      this.currentImageIndex=this.images.length;
    }
      
    this.currentImageIndex = (this.currentImageIndex - 1) % this.images.length;
    this.img_main = this.images[this.currentImageIndex];
  }

  ChangeImgRight() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.img_main = this.images[this.currentImageIndex];
  }

}
