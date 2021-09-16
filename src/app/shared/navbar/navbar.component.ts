import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc:AuthService, private router:Router) { }

  async ngOnInit() {
  }

  async onLogout() {
    try{
      await this.authSvc.logout();
      this.router.navigateByUrl('/auth/login');
    }
    catch(e:any){
      console.log(e)
    }
  }

}
