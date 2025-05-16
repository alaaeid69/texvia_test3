
import { Component, OnInit, AfterViewInit, OnDestroy, Renderer2, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare global {
  interface Window {
    particlesJS: any;
    bootstrap: any;
    pJSDom: any[];
  }
}
interface home{
  top:string,
  header:string,
  description:string,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private particlesScriptElement: HTMLScriptElement | null = null;
  private tooltipInstances: any[] = [];

  homeCaption: home[] = [
    {top:'💡 Your Digital Transformation Partner' , header:'From Data to Decisions — Smarter Industry Starts Here', description:'We help industrial enterprises improve efficiency, gain real-time visibility, and future-proof their operations through digital transformation, automation, and connected technologies'},
    {top:'🚀 Operational Intelligence Delivered' ,  header:'Digitize. Connect. Transform', description:'Empower your operations with integrated platforms for automation, real-time monitoring, and industrial analytics—designed to scale with your digital innovation goals.'},
    {top:'⚙️ Built for Industry 4.0' ,              header:'Connected Operations for a Connected World.', description:'We design and implement secure, scalable, and intelligent solutions that support Industry 4.0 strategies—from edge connectivity to advanced manufacturing systems.'},
    {top:'🌱 Digital + Sustainable by Design' ,      header:'Drive Efficiency. Deliver Impact', description:'Support your ESG initiatives and reduce operational waste with energy-efficient technologies, smart data insights, and sustainable industrial solutions.'},
    {top:'📊 Real-Time Intelligence' , header:'Turn Complexity into Clarity.', description:'Unify your industrial data, workflows, and teams with real-time insights that drive faster decisions and better execution across operations.'},
  ];
  currentHomeCaption:home= this.homeCaption[0];
  currentIndex:number =0;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.loadParticlesScript();
    this.homePageCaption(); 
  }

  ngAfterViewInit(): void {
    this.setupTooltips();
  }

  ngOnDestroy(): void {
    this.cleanupParticles();
    this.cleanupTooltips();
    this.removeParticlesScriptElement();
  }

  private loadParticlesScript(): void {
    const existingScript = this.document.querySelector('script[src*="particles.min.js"]') as HTMLScriptElement;

    if (existingScript) {
      if (typeof window.particlesJS !== 'undefined') {
        this.initializeAllParticles();
      } else {
        existingScript.onload = () => this.initializeAllParticles();
        existingScript.addEventListener('load', () => this.initializeAllParticles());
      }
      this.particlesScriptElement = existingScript;
      return;
    }

    this.particlesScriptElement = this.renderer.createElement('script');
    this.particlesScriptElement !.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    this.particlesScriptElement !.async = true;
    this.particlesScriptElement !.onload = () => this.initializeAllParticles();
    this.particlesScriptElement !.addEventListener('load', () => this.initializeAllParticles());
    this.particlesScriptElement !.onerror = (error) => {
         console.error('Failed to load particles.js script', error);
    };
    this.renderer.appendChild(this.document.body, this.particlesScriptElement);
  }

  private initializeAllParticles(): void {
    if (typeof window.particlesJS !== 'undefined') {

      const element1Exists = this.document.getElementById('particles-js-1');
      const element2Exists = this.document.getElementById('particles-js-2');

      if (!element1Exists || !element2Exists) {
          console.warn('One or both particle container elements not found. Cannot initialize particles.');
          return;
      }

      const commonParticlesConfig = {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
          opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: {
            enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      };

      // Initialize the first instance
      window.particlesJS('particles-js-1', commonParticlesConfig);

      // Initialize the second instance (can use a different config if needed)
      window.particlesJS('particles-js-2', commonParticlesConfig);


    } else {
      console.error('particles.js library not available. Cannot initialize.');
    }
  }

  private cleanupParticles(): void {
      if (window.pJSDom && Array.isArray(window.pJSDom)) {
          for (let i = window.pJSDom.length - 1; i >= 0; i--) {
              const instance = window.pJSDom[i];
              if (instance?.pJS?.fn?.vendors?.destroypJS) {
                  try {
                       instance.pJS.fn.vendors.destroypJS();
                       window.pJSDom.splice(i, 1);
                  } catch (e) {
                      console.error('Error destroying particle instance:', e);
                  }
              }
          }
           if (window.pJSDom.length > 0) {
             window.pJSDom = [];
           }
      } else {
          const element1 = this.document.getElementById('particles-js-1');
          if(element1?.parentNode) {
             this.renderer.removeChild(element1.parentNode, element1);
          }
          const element2 = this.document.getElementById('particles-js-2');
           if(element2?.parentNode) {
              this.renderer.removeChild(element2.parentNode, element2);
          }
      }
  }

  private removeParticlesScriptElement(): void {
     if (this.particlesScriptElement?.parentNode) {
        this.renderer.removeChild(this.document.body, this.particlesScriptElement);
        this.particlesScriptElement = null;
     }
  }


  private setupTooltips(): void {
     if (typeof window.bootstrap !== 'undefined' && typeof window.bootstrap.Tooltip === 'function') {
       const tooltipTriggerList = [].slice.call(this.el.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]'));
       this.tooltipInstances = tooltipTriggerList.map((tooltipTriggerEl: HTMLElement) => {
         if (tooltipTriggerEl) {
            try {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            } catch (e) {
                console.error('Error creating tooltip instance:', e);
                return null;
            }
         }
         return null;
       }).filter(instance => instance !== null);
     } else {
       console.warn('Bootstrap Tooltip library not found.');
     }
  }

  private cleanupTooltips(): void {
      if (this.tooltipInstances) {
        this.tooltipInstances.forEach(tooltip => {
           try {
             if (tooltip && typeof tooltip.dispose === 'function') {
               tooltip.dispose();
             }
           } catch (e) {
             console.error('Error disposing tooltip instance:', e);
           }
        });
        this.tooltipInstances = [];
      }
  }


  homePageCaption():void{
  setInterval(() => {
    this.currentIndex =(this.currentIndex + 1) % this.homeCaption.length;
    this.currentHomeCaption = (this.homeCaption[this.currentIndex])
  }, 3000);
  }
}