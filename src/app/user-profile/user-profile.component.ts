import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'I don\'t know who I am ',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

  isAgeHidden: boolean = false;

  toggleAge(): void {
    this.isAgeHidden = !this.isAgeHidden;
  }
}
