import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactformComponent } from "./contactform/contactform.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactformComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KeavaContactUs';
}
