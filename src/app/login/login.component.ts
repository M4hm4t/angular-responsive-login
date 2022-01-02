import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
//log in metotu
logIn(){
  this._http.get<any>("http://localhost:3000/login") // login apisi gelecek
  .subscribe(res => {
    const user = res.find((e:any)=>{
      return e.email === this.loginForm.value.email && e.password === this.loginForm.value.password
    })
    if (user) {
      alert ("Giriş Başarılı!");
      this.loginForm.reset();
      this.router.navigate([''])
    }else {
      alert("Kullanıcı Bulunamadı!")
    }
  },err=>{
    alert ("Kullanıcı Adı veya Şifre Yanlış!!")
  }
  )
}
}
