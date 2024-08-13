import { Component } from '@angular/core';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css'
})
export class RoomDetailComponent {
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
  currentImageIndex = 0;

  ngOnInit(): void {
    this.Break();
  }

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
}
