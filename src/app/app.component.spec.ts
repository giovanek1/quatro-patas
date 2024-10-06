import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, provideRouter, withRouterConfig } from '@angular/router';
import { ElementRef } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([], withRouterConfig({})),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
          },
        },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the hiddenMenu is true`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.hiddenMenu).toBeTruthy();
  });

  it(`should call openMenu and hiddenMenu is false`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'openMenu').and.callThrough();
    app.openMenu();
    expect(app.openMenu).toHaveBeenCalled();
    expect(app.hiddenMenu).toBeFalsy();
  });

  it('should call openMenu when click is outside btnMenu and hiddenMenu is false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.btnMenu = {
      nativeElement: {
        contains: () => false
      }
    } as ElementRef;
    app.hiddenMenu = false;
    spyOn(app, 'openMenu').and.callThrough();
    const event = new MouseEvent('click');
    app.onClick(event);
    expect(app.openMenu).toHaveBeenCalled();
  });

  it('should NOT call openMenu when hiddenMenu is true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.btnMenu = {
      nativeElement: {
        contains: () => false
      }
    } as ElementRef;
    app.hiddenMenu = true;
    spyOn(app, 'openMenu');
    const event = new MouseEvent('click');
    app.onClick(event);
    expect(app.openMenu).not.toHaveBeenCalled();
  });

  it('should NOT call openMenu when click is inside btnMenu', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.btnMenu = {
      nativeElement: {
        contains: () => true
      }
    } as ElementRef;
    app.hiddenMenu = false;
    spyOn(app, 'openMenu');
    const event = new MouseEvent('click');
    app.onClick(event);
    expect(app.openMenu).not.toHaveBeenCalled();
  });

  it('should have a header element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement).toBeTruthy();
  });

  it('should have a footer element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const footerElement = fixture.nativeElement.querySelector('footer');
    expect(footerElement).toBeTruthy();
  });

  it('should have a section element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const sectionElement = fixture.nativeElement.querySelector('section');
    expect(sectionElement).toBeTruthy();
  });

  it('should have a router-outlet element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const sectionElement = fixture.nativeElement.querySelector('router-outlet');
    expect(sectionElement).toBeTruthy();
  });
});
