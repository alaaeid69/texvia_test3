import { Component} from '@angular/core';
@Component({
  selector: 'app-industries',
  imports: [],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent{

scrollToSection(sectionId: string){
const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' , block:'start'})
}

}
}
