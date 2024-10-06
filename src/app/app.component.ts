import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  hiddenMenu: boolean = true;
  @ViewChild('btnMenu') btnMenu!: ElementRef;

  openMenu() {
    this.hiddenMenu = !this.hiddenMenu;
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (!this.btnMenu) return;
    if (!this.hiddenMenu && !this.btnMenu.nativeElement.contains(event.target)) {
      this.openMenu();
    }
  }
}
