import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navbarCollapsed = true;

  constructor(private user:ApiService) { }

  ngOnInit(): void {
  }

  logout(){
    this.user.removeTokenOnLogout();
  }

}
