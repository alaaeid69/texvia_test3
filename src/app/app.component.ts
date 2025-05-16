import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { SolutionsComponent } from "./pages/solutions/solutions.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { RegisterComponent } from "./pages/register/register.component";
import { IndustriesComponent } from "./pages/industries/industries.component";
import { HowWeDeliverValueComponent } from "./pages/how-we-deliver-value/how-we-deliver-value.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly router = inject(Router)
}
