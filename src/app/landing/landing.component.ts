import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {

    const baseUrl = window.location.origin;
    this.http.post(baseUrl + '/.netlify/functions/signup', this.form.value).subscribe(
      (res) => {
        console.log("success");
        console.log(res);
      },
      (err) => {
        console.log("error");
        console.log(err);
      });
  }
}
