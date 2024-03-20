class Platform {
  
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    
    this.height = 20;
    this.width = 70;
    
    this.img = img;
  }
  
  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
  
}