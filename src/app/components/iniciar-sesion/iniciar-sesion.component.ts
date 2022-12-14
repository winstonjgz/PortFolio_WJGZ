import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  formLogin:FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
    
    
  ) { 
    this.formLogin=new FormGroup(
      {
        email: new FormControl(),
        password: new FormControl()
        })

      
    
    
  }

  ngOnInit(): void {
  }


  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(response=>{
      console.log(response);
      this.router.navigate(["/portafolio"]);
    })
    .catch(error=>console.log(error));
  }
  /*get Email()
  {
    return this.form.get('email');
  }

  get Password()
  {
    return this.form.get('password');
  }*/

  onClick(){
    this.userService.loginWithGoogle()
    .then(response=>{

    })
    .catch(error => console.log(error));
  }

}
