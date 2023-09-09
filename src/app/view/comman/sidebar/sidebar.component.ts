import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  toggleDropdown(event: Event): void {
    event.preventDefault();
    const dropdown = (event.target as HTMLElement).closest('.dropdown');
    const icons = dropdown?.querySelectorAll('.bx-plus-circle');

    if (dropdown) {
      dropdown.classList.toggle('active');
  
      if (icons) {
        icons.forEach(icon => {
          icon.classList.toggle('bx-plus-circle', !dropdown.classList.contains('active'));
          icon.classList.toggle('bx-minus-circle', dropdown.classList.contains('active'));
        });
      }
    }
  }

}
