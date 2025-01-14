import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet,ProductFormComponent] 
})
export class AppComponent {
  title = 'my-app';
}
