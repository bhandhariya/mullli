import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  form:FormGroup;
  constructor(public translate:TranslateService, private fb:FormBuilder){
    translate.addLangs(['en','fr','hi','ms', 'chi']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en | hi | ms | chi |fr/) ? browserLang : 'en');
  }


ngOnInit(): void {
  this.form = this.fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required]],
    mobile: [null, [Validators.required]],
    address: [null, [Validators.required]]
  })
}

onSubmit(){
  alert('Your Form is submmited');
}

}
