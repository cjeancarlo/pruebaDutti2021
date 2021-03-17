import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import  Swal  from 'sweetalert2';
// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      password: [ '', [Validators.required, Validators.minLength(6)]],

    })
  }

  registerUser() {
    if (this.registerForm.invalid) { return }
    
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Wait please'
    });
    Swal.showLoading();


    this.auth.newUser( this.registerForm.value ).subscribe( response => {
      Swal.close();
      this.router.navigate(['/principal/ships']);
      
  }, (err) => {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'email exists'
    });
    

  })

    // var userLogin = this.registerForm.value;
    // usersList.push(userLogin)
    // console.log('User Register -->', usersList)
    // this.router.navigate(['/principal/ships'])

  }

}
