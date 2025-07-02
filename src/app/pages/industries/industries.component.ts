import { Component, inject} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { fromEvent, Subject, takeUntil, throttleTime } from 'rxjs';
@Component({
  selector: 'app-industries',
  imports: [RouterLink],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent{

// scrollToSection(sectionId: string){
// const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' , block:'start'})
// }

// }
 private readonly router = inject(Router);

private destroy$ = new Subject<void>(); 
  constructor() {
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(100, undefined, { leading: true, trailing: true }), 
        takeUntil(this.destroy$) 
      )
      .subscribe((event) => this.onWindowScroll(event));
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onWindowScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop; 
    const adjustedScrollPosition = scrollPosition + 400

    const sections = document.querySelectorAll<HTMLElement>('.industry-cards')
    let activeSectionId: string | null = null
    sections.forEach((section: HTMLElement) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (
        sectionTop <= adjustedScrollPosition &&
        sectionBottom > adjustedScrollPosition
      ) {
        activeSectionId = section.id; 
      }
    });

       const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav .nav-item .nav-link');
    navLinks.forEach((link: HTMLAnchorElement) => {
      if (activeSectionId && link.href.includes(activeSectionId)) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    });
  }
}
