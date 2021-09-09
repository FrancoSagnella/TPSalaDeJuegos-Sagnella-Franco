import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  });
  public users:any = [];

  constructor(private authSvc:AuthService,
              private router:Router,
              private firestore:FirestoreService,
              ) { }

  ngOnInit(): void {
    // traigo los usuarios de la bbdd, para poder hacer los botones rapidos
    this.firestore.obtenerTodos('usuarios').subscribe((usersSnapshot) => {
      this.users = [];
      usersSnapshot.forEach((userData: any) => {
        this.users.push({
          id: userData.payload.doc.id,
          data: userData.payload.doc.data()
        });
      })
    });
  }

  async onLogin()
  {
    const {email, password} = this.loginForm.value;
    try{

        const user = await this.authSvc.login(email, password);
        if(typeof(user) !== 'string'){
          this.router.navigateByUrl('/home');
          // this.toast.success('Iniciaste sesion!!', 'Inicias Sesion');
          Swal.fire('Iniciaste sesion!', 'Login exitoso', 'success');
          let f = new Date();
          this.firestore.crear('logs',{ mensaje:'El usuario '+email+' ha inicado sesion el dia '+f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear() + ' a las ' + f.getHours()+':'+f.getMinutes()+':'+f.getSeconds()});
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

  guardarMensaje(user:any){
    this.firestore.guardarMensajeFirestore(user.email + ' inicio sesion a la hora ' + new Date().getDate());
  }

  seleccionarUsuario(correo:string, clave:string)
  {
    this.loginForm.setValue({email: correo, password: clave});
  }
}
