import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { QueryList } from '@angular/core';
import { AdoptComponent } from './adopt.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { AdoptService } from './adopt.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdoptComponent', () => {
  let component: AdoptComponent;
  let fixture: ComponentFixture<AdoptComponent>;
  let adoptServiceSpy: jasmine.SpyObj<AdoptService>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AdoptComponent, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptComponent);
    component = fixture.componentInstance;
    adoptServiceSpy = TestBed.inject(AdoptService) as jasmine.SpyObj<AdoptService>;
    adoptServiceSpy.adoptionCards = [
      {
        isFav: false,
        adopted: false,
        srcImg: './teste.png',
        title: 'teste',
        description: 'teste',
      },
      {
        isFav: true,
        adopted: false,
        srcImg: './teste.png',
        title: 'teste',
        description: 'teste',
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should toggle adoptionCards and open modal when property is true', () => {
    const modalsSpy = jasmine.createSpyObj('ModalComponent', ['open']);
    component.modals = new QueryList<ModalComponent>();
    component.modals.reset([modalsSpy]);

    component.handleAction(0, 'isFav', 0);

    expect(adoptServiceSpy.adoptionCards[0].isFav).toBeTrue();
    expect(modalsSpy.open).toHaveBeenCalled();
  });

  it('should not open modal if property is false after toggling', () => {
    const modalsSpy = jasmine.createSpyObj('ModalComponent', ['open']);
    component.modals = new QueryList<ModalComponent>();
    component.modals.reset([modalsSpy]);

    component.handleAction(1, 'isFav', 0);

    expect(adoptServiceSpy.adoptionCards[1].isFav).toBeFalsy();
    expect(modalsSpy.open).not.toHaveBeenCalled();
  });

  it('should return correct icon path for favorite status', () => {
    const iconChecked = component.getIconFav(true);
    const iconUnchecked = component.getIconFav(false);

    expect(iconChecked).toBe('./../../../assets/svg/heart-checked.svg');
    expect(iconUnchecked).toBe('./../../../assets/svg/heart-unchecked.svg');
  });
});
