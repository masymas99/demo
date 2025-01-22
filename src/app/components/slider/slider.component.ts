import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images: string[] = [
    'https://img.freepik.com/free-photo/smart-feeder-pets-still-life_23-2151310893.jpg',
      'https://img.freepik.com/free-photo/coffee-beans-wooden-small-bowls-old-wooden-vintage-background-closeup_1220-6686.jpg?t=st=1737585738~exp=1737589338~hmac=dd5a2424985954a89ccc9346ce98d45034e286e5edebeb4ae99681a62e103345&w=996',
      'https://img.freepik.com/free-photo/cup-coffee-with-arabica-beans-around_114579-19239.jpg?t=st=1737585792~exp=1737589392~hmac=e7d208747bad560f4297ccd819186cb4068e7d03d33d89f4b95695a39beb25a6&w=996'
  ];
  currentIndex: number = 0;
  intervalId: any;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  play() {
    this.stop();
    this.intervalId = setInterval(() => {
      this.next();
    }, 2000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
