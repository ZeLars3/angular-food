import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LinkService } from '../../services/link.service';
import { Materialservice } from '../../services/material.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements AfterViewInit {

  @ViewChild('floating')
  floatingRef!: ElementRef;

  links = this.linkService.links;

  constructor(private linkService: LinkService, private auth: AuthService, private route: Router) { }

  ngAfterViewInit() {
    Materialservice.initializeFloatingButton(this.floatingRef);
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.route.navigate(['/login']);
  }

}
