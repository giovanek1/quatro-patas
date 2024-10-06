import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, HostListener, inject, Input, Renderer2, ViewChild } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modalAnimation', [
      state('closed', style({
        opacity: 0,
        transform: 'translateY(-100%)',
      })),
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      transition('closed => open', [
        animate('300ms ease-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in')
      ]),
    ]),
  ],
})
export class ModalComponent {
  @HostBinding('style') hostStyles = 'display: none;';
  @HostBinding('@modalAnimation') modalState = 'closed';
  @ViewChild('container') container!: ElementRef;
  private _renderer: Renderer2 = inject(Renderer2);
  @Input() srcImg!: string;
  @Input() srcAlt!: string;
  @Input() bgClass!: string;
  @Input() title!: string;
  @Input() description!: string;

  open() {
    this.hostStyles = 'display: flex;';
    this.modalState = 'open';
    this._renderer.setStyle(document.body, 'overflow-y', 'hidden');
  }

  close() {
    this.modalState = 'closed';
    setTimeout(() => {
      this.hostStyles = 'display: none;';
      this._renderer.setStyle(document.body, 'overflow-y', 'auto');
    }, 300);
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (!this.container.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}
