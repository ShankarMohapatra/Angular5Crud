import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  namee: string = '';
  pricee: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  // showAnswer() {
  //   this.showSpinner = true;

  //   setTimeout(() => {
  //     this.answerDisplay = this.answer;
  //     this.showSpinner = false;
  //   }, 2000);
  // }



  title = 'Add Coin';
  //angForm: FormGroup;
  rngForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
  //   this.angForm = this.fb.group({
  //     name: ['', Validators.required ],
  //     price: ['', Validators.required ]
  //  });
   this.rngForm = this.fb.group({
        namee: ['', Validators.required ],
        pricee: ['', Validators.required ]
    });
  }
  addCoin() {
      this.coinservice.addCoin(this.namee, this.pricee);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
