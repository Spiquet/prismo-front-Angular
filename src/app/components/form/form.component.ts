import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../shared/services/members.service';
import { Router } from '@angular/router';
import { Members } from '../../shared/models/members';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { first } from 'rxjs/operators';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  memberForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';


  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private apiService: ApiService,
    private snackbar: SnackbarService) { }

  ngOnInit() {
    this.initForm();

  }

  goBack(): void {
    this.router.navigate(['/members-list']);
    }

  initForm() {
    this.memberForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      avatar: ['', Validators.required],
      function : ['', ],
      description: ['', Validators.required],
    });

  }

    // convenience getter for easy access to form fields
    get f() { return this.memberForm.controls; }


  onSubmitForm() {



this.submitted = true;
this.loading = true;
this.apiService.register(this.memberForm.value)
            .pipe(first())
            .subscribe(
                (data) => {
                  this.router.navigate(['/members-list']);
                  this.snackbar.openSnackBar(
                    'Nouveau membre dans la team'
                  );

                },
                error => {
                  // this.loading = false;

                });
    }


  }









