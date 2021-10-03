import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  User = {
    name: ''
  }

  routerToChat(){
    this.router.navigateByUrl('/chat/'+ this.User.name);
  }
  ngOnInit(): void {
  }

}

