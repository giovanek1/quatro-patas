import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { AdoptService } from './adopt.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { PropUpdateAdoptionType } from './adopt.component.type';

@Component({
  standalone: true,
  imports: [CardComponent, ModalComponent, CommonModule],
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdoptComponent {
  protected readonly mapIndexModal = {
    isFav: 0,
    adopted: 1
  };
  protected adoptService: AdoptService = inject(AdoptService);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  @ViewChildren(ModalComponent) modals!: QueryList<ModalComponent>;

  handleAction(index: number, propName: PropUpdateAdoptionType, indexModal: number) {
    this._updateAdoptionCards(index, propName);
    this.adoptService.adoptionCards[index][propName] ? this.modals.get(indexModal)?.open() : null;
    this._cdr.markForCheck();
  }

  private _updateAdoptionCards(index: number, propName: PropUpdateAdoptionType) {
    const adoptionCards = this.adoptService.adoptionCards
    adoptionCards[index][propName] = !adoptionCards[index][propName];
    this.adoptService.adoptionCards = adoptionCards;
  }

  getIconFav(isFav: boolean): string {
    const partIcon = isFav ? 'checked' : 'unchecked';
    return `./../../../assets/svg/heart-${partIcon}.svg`
  }

}
