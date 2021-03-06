import { USERS } from './../../mock-users';
import { UserGridComponent } from './../user-grid/user-grid.component';
import { Component, OnInit, Input } from '@angular/core';
import { User } from './../../user';
import { UserService } from './../../shared/services/user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private userService: UserService, private location: Location) { }

  ngOnInit() {
    this.getUser();
  }


  getUser(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
