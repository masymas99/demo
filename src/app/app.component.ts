import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
