import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';
  items: NbMenuItem[] = [
    {
      title: 'Ana Sayfa',
      icon: 'home-outline',
      link: '/home',
      home: true
    },
    {
      title: 'Hesap',
      icon: 'lock-outline',
      children: [
        {
          title: 'Giriş Yap',
          link: '/login',
        },
        {
          title: 'Kayıt ol',
          link: '/signup',
        },
        {
          title: 'Kullanıcılar',
          link: '/users',
        },
      ]
    }

  ];

  constructor(private readonly sidebarService: NbSidebarService) {
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
}
