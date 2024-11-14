import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactformComponent } from "./contactform/contactform.component";
import { ReactiveFormsModule } from '@angular/forms';
import { PrivacypolicyComponent } from "./privacypolicy/privacypolicy.component";
import { ShippingDetailsComponent } from "./shipping-details/shipping-details.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactformComponent, ReactiveFormsModule, PrivacypolicyComponent, ShippingDetailsComponent, TermsConditionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KeavaContactUs';
}
