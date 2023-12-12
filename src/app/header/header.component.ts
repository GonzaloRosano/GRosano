// header.component.ts
import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showLogoCarousel: boolean = false;
  activeNavItem: string = 'logo';
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {}
}
