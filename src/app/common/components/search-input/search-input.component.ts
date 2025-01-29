import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  searchValue = '';
  onSearch = output<string>();

  search() {
    this.onSearch.emit(this.searchValue);
  }

  handelSearchEvent($event: any) {
    this.onSearch.emit($event.target.value);
  }
}
