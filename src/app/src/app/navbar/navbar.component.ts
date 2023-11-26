import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../interfaces/navbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navLists: Navbar[] = [
    {
      id: 'home',
      title: 'home',
      url: '/',
    },
    {
      id: 'create',
      title: 'create',
      url: '/create',
    },
  ];
}
