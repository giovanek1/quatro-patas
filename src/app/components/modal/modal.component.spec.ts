import { waitForAsync, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { ElementRef, Renderer2 } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let renderer2: Renderer2;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalComponent, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal and apply display flex', () => {
    spyOn(renderer2, 'setStyle');
    component.open();
    expect(component.hostStyles).toBe('display: flex;');
    expect(renderer2.setStyle).toHaveBeenCalledWith(document.body, 'overflow-y', 'hidden');
  });

  it('should set modalState to closed and apply display none after 300ms', fakeAsync(() => {
    spyOn(renderer2, 'setStyle');
    component.close();
    expect(component.modalState).toBe('closed');
    tick(300);
    expect(component.hostStyles).toBe('display: none;');
    expect(renderer2.setStyle).toHaveBeenCalledWith(document.body, 'overflow-y', 'auto');
  }));

  it('should close the modal when clicking outside the container', () => {
    spyOn(component, 'close');
    component.container = {
      nativeElement: {
        contains: () => false
      }
    } as ElementRef;

    const event = new MouseEvent('click');
    component.onClick(event);
    expect(component.close).toHaveBeenCalled();
  });

  it('should not close the modal when clicking inside the container', () => {
    spyOn(component, 'close');
    component.container = {
      nativeElement: {
        contains: () => true
      }
    } as ElementRef;

    const event = new MouseEvent('click');
    component.onClick(event);
    expect(component.close).not.toHaveBeenCalled();
  });

  it('should close the modal when Escape key is pressed', () => {
    spyOn(component, 'close');
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    component.onKeydown(event);
    expect(component.close).toHaveBeenCalled();
  });

  it('should not close the modal when other key is pressed', () => {
    spyOn(component, 'close');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    component.onKeydown(event);
    expect(component.close).not.toHaveBeenCalled();
  });
});
