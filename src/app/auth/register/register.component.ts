import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
   });

  constructor(private authSvc: AuthService, 
              private router:Router, 
              private firestore:FirestoreService) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const {email, password} = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);
      if(typeof(user) !== 'string'){
        // usa vez se registro bien, lo guardo en el firestore, asi despues puedo recuperar sus datos para los botones rapidos
          this.firestore.crear('usuarios', {correo:email, clave:password, perfil:'', sexo:'' });
          this.router.navigateByUrl('/home');
          // this.toast.success('Cuenta creada!!', 'Registrar usuario');
          Swal.fire('Cuenta creada!', 'Registro exitoso', 'success');
        }
        else {
          // this.toast.error(user, 'Algo salió mal!');
          Swal.fire(user, 'Algo salió mal', 'error');

        }
    }
    catch(e)
    {
      console.log(e);
    }
  }
}
