import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layouts/navbar/navbar.component";

import { FooterComponent } from "./layouts/footer/footer.component";
import { TagManagerService } from './core/services/Tag-Manager/tag-manager.service';
import { filter, map } from 'rxjs';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent  implements OnInit {
  readonly router = inject(Router)
  private tagManagerService= inject(TagManagerService)
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);

  ngOnInit(): void {
    this.trackingPageView()
  }

//  for tag manger tracking
  trackingPageView():void{
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.data['title'] || 'Texvia')
    ).subscribe(title => {
      this.titleService.setTitle(title);
      this.tagManagerService.trackPageView(this.router.url);
    });
  }
}
