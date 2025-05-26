import { Component, Input, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-vertical-progress-bar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './vertical-progress-bar.component.html',
    styleUrls: ['./vertical-progress-bar.component.scss']
  })
  export class VerticalProgressBarComponent implements OnInit, AfterViewInit {
    @Input() progress: number = 0; // Progress percentage (0-100)
    @ViewChild('container', { static: true }) container!: ElementRef;

    sliderHeight: number = 0;
    sliderTop: number = 80; // Fixed offset (adjustable)
    sectionPositions: number[] = []; // Percentage positions for sections
    filledSections: boolean[] = []; // Tracks which markers are filled

    ngOnInit() {
      this.updateSlider();
    }

    ngAfterViewInit() {
      // Get sections and calculate positions
      const sections = document.querySelectorAll('.homepage-section');
      if (sections.length === 0) {
        console.warn('No elements with class "homepage-section" found.');
        return;
      }

      const containerHeight = this.container.nativeElement.offsetHeight;
      let cumulativeHeight = 0;

      this.sectionPositions = Array.from(sections).map((section) => {
        const htmlSection = section as HTMLElement; // Explicit type cast
        cumulativeHeight += htmlSection.offsetHeight;
        return (cumulativeHeight / containerHeight) * 100; // Position as percentage
      });

      this.filledSections = new Array(sections.length).fill(false);
      this.updateSlider();

      // Observe sections for visibility
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const section = entry.target as HTMLElement;
              const sectionIndex = parseInt(section.dataset['sectionIndex'] || '0', 10);
              const totalSections = sections.length;
              this.progress = ((sectionIndex + 1) / totalSections) * 100;
              this.updateSlider();
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach(section => observer.observe(section));
    }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      this.progress = Math.min(100, (scrollPosition / maxScroll) * 100);
      this.updateSlider();
    }

    private updateSlider() {
      const containerHeight = this.container.nativeElement.offsetHeight;
      this.sliderHeight = (this.progress / 100) * containerHeight;
      this.filledSections = this.sectionPositions.map(position => this.progress >= position);
    }

    
  }