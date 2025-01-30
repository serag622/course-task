import {
  Component,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Banner } from '../../../common/model/banner.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [NgClass],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnChanges {
  bannerItems = input.required<Banner[]>();
  currentBanner: Banner = {
    id: 0,
    brief: '',
    image: '',
    order: 0,
    title: '',
    category: '',
    colorCode: '',
  };
  currentOrder = 1;
  colorsList: { color: string; order: number }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bannerItems'].currentValue?.length) {
      this.currentBanner = this.bannerItems().filter(
        (b) => b.order === this.currentOrder
      )[0];
      this.getColorsList();
      // this.setBannerInterval()
    }
  }

  getColorsList() {
    this.bannerItems().forEach((b) => {
      this.colorsList.push({ color: b.colorCode, order: b.order });
    });
  }

  setBannerInterval() {
    setInterval(() => {
      if (this.currentOrder < this.bannerItems().length) {
        this.selectBanner(this.currentOrder + 1)
      } else {
        this.selectBanner(1)
      }
    }, 5000);
  }

  selectBanner(index: number) {
    this.currentOrder = index;
    this.currentBanner = this.bannerItems().filter(
      (b) => b.order === this.currentOrder
    )[0];
  }
}
