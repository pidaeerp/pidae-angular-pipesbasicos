import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'oscar vásquez';
  public nameUpper: string = 'OSCAR VÁSQUEZ';
  public fullName: string = 'OsCaR VáSqUeZ';

  public customDate: Date = new Date();
}
