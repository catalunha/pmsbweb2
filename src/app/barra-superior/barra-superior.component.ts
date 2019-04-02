import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logof()
    this.router.navigate(['/login'])
  }

}
