import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  signupUser(): void {
    const emailInput = (<HTMLInputElement>document.getElementById('uname')).value.trim();
    const passInput = (<HTMLInputElement>document.getElementById('pwd')).value.trim();
    const emailFormat = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';

    if (!emailInput.match(emailFormat)) {
      alert('Please enter a valid email!');
    } else if (passInput === '') {
      alert('Password field cannot be empty!');
    } else {
      // Perform signup logic here, e.g., send a request to the server
      alert('Signup successful!');
    }
  }

}
