import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-fw pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-fw pi-globe',
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-fw pi-cog',
          },
        ],
      },
    ];
  }

  // ngOnInit() {
  //   this.menuItems = [
  //     {
  //       label: 'New',
  //       icon: 'pi pi-fw pi-plus',
  //     },
  //     {
  //       label: 'Download',
  //       icon: 'pi pi-fw pi-download',
  //     },
  //     {
  //       label: 'Update',
  //       icon: 'pi pi-fw pi-refresh',
  //     },
  //     {
  //       label: 'Delete',
  //       icon: 'pi pi-fw pi-trash',
  //     },
  //   ];
  // }
}
