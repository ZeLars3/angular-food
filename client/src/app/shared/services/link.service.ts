import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  links = [
    {path: '/overview', name: 'Overview'},
    {path: '/analytics', name: 'Analytics'},
    {path: '/history', name: 'History'},
    {path: '/order', name: 'Add Order'},
    {path: '/categories', name: 'Categories'}
  ];
  constructor() { }
}
