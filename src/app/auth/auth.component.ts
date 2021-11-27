import { Component, OnInit } from '@angular/core';
import { RequestService } from '../shared/request.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
