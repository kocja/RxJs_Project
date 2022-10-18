import {Component, OnInit} from '@angular/core';
import {AppRoutingModule} from "../app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routingModule: AppRoutingModule) {
  }

  ngOnInit(): void {
  }

}
