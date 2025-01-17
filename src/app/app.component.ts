import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FormComponent } from './units/form/form.component';
import { FooterComponent } from './units/footer/footer.component';
import { CardComponent } from './units/card/card.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ServicesComponent } from './pages/services/services.component';
import { AerospaceComponent } from './units/aerospace/aerospace.component';
import { BankingComponent } from './units/banking/banking.component';
import { HealthcareComponent } from './units/healthcare/healthcare.component';
import { LocomotiveComponent } from './units/locomotive/locomotive.component';
import { InsuranceComponent } from './units/insurance/insurance.component';
import { IndustrialComponent } from './units/industrial/industrial.component';
import { MobilityComponent } from './units/mobility/mobility.component';
import { SecurityComponent } from './units/security/security.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FormComponent,AerospaceComponent,BankingComponent,HealthcareComponent,LocomotiveComponent,InsuranceComponent,IndustrialComponent,MobilityComponent,SecurityComponent,FooterComponent,CardComponent,CarouselComponent,HomeComponent,AboutusComponent,ContactusComponent,DepartmentComponent,ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project3';
}
