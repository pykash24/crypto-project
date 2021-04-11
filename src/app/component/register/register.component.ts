import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

}
