import { Component, OnInit } from '@angular/core';
import { PricePipe } from './pipes/price.pipe';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularbootstrap';
  description_title = 'Bakery Coded in Angular';

  searchValue: string = '';

  changeSearchValue(e: Event) {
    this.searchValue = (<HTMLInputElement>e.target).value;

  }

  otherAboutPics: boolean = true;
  orgAboutPics: boolean = false;

  changeAboutPics() {
    this.otherAboutPics = !(this.otherAboutPics);
    this.orgAboutPics = !(this.orgAboutPics);
  }
  
  reviewerName: string = 'You';
  addReviewerName(e: Event) {
    this.reviewerName = (<HTMLInputElement>e.target).value;
    if (this.reviewerName == ''){
      this.reviewerName = 'Anonymous';
    }
  }
  reviewerComment: string = 'Write about your experience';
  addReviewerComment(e: Event) {
    this.reviewerComment = (<HTMLInputElement>e.target).value;
    if (this.reviewerComment == ''){
      this.reviewerComment = 'Write about your experience';
    }
  }

  reviews = [
    {name: 'Selena Rivera', position: 'Software Developer', comment: 'This has been one of the best bakeries I\'ve been to, and I continue to come here for my weekly sweet desserts.', img: 'assets/img/testimonial-1.jpg'},
    {name: 'Josh Martin', position: 'Cyber-Security Engineer', comment: 'I come to get my breakfast everyday before work. Fresh, Healthy, and Delicious - nothing more I could ask for!', img: 'assets/img/testimonial-2.jpg'},
    {name: 'Miguel Rojo', position: 'Product Manager', comment: 'My friends and I come here often to celebrate birthdays and anniversaries. Some of my best memories are made here.', img: 'assets/img/testimonial-3.jpg'},
    {name: 'Christina Rodwick', position: 'IT Analyst', comment: 'I\'ve had a sweet tooth my entire life and this place is exactly what I need. Their customer service is AMAZING!', img: 'assets/img/testimonial-4.jpg'}   
  ]

  can: number = 0;
  curr: string = 'USD';
  country: string = 'Canadian'
  changeCurrency() {
    if (this.can == 1){
      this.can = 0;
      this.curr = 'USD';
      this.country = 'Canadian';
    } else {
      this.can = 1;
      this.curr = 'CAD';
      this.country = 'US';
    }
  }

  reactiveForm: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if(this.reactiveForm.valid){
      alert('Thank you for subscribing!');
    }else{
      alert('Please enter a valid email');
    }
    
  }
  
}
