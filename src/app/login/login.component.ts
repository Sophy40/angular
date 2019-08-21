import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
valdMsg={'login':{
  'required':'login is required',
  'minlength':'login name should be min 6 characters'
},
'password':{
  'required':'password is required',
  'minlenght':'password should be min 6 characters'
}
}
formErrors={login:{required:undefined,minlenght:undefined}, password:{required:undefined,minlenght:undefined}}
  constructor() { }

  ngOnInit() {
  }
onClickSubmit(ln,ps){
  this.formErrors.login={required:undefined, minlenght:undefined}
  this.formErrors.password={required:undefined, minlenght:undefined}
  if(ln.invalid && (ln.dirty || ln.touched)){
    if(ln.errors.required ){
      this.formErrors.login.required=this.valdMsg.login.required
    }
    if(ln.errors.minlenght){
      this.formErrors.login.minlenght=this.valdMsg.login.required
    }
  }
  if(ps.invalid && (ln.dirty || ln.touched)){
    if(ps.errors.required){
      this.formErrors.password.required=this.valdMsg.password.required
    }
    if(ln.errors.minlenght){
      this.formErrors.password.minlenght=this.valdMsg.password.required
    }
  }
}

}
