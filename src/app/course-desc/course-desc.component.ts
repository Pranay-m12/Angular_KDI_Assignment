import { Component, OnInit } from '@angular/core';
import { ICourses } from '../home/courses';
import { CourseService } from '../home/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-desc',
  templateUrl: './course-desc.component.html',
  styleUrls: ['./course-desc.component.css']
})
export class CourseDescComponent implements OnInit {


  course!: ICourses[]
  constructor(private CourseService: CourseService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.CourseService.getCourses().subscribe(courses => this.course = courses.filter(course => course.courseId === +id)
      )
    }
    console.log(this.course);
    this.invokeStripe();

  }
  invokeStripe() {

    if (!window.document.getElementById('stripe-script')) {

      const script = window.document.createElement('script');




      script.id = 'stripe-script';

      script.type = 'text/javascript';

      script.src = 'https://checkout.stripe.com/checkout.js';

      script.onload = () => {

        this.paymentHandler = (<any>window).StripeCheckout.configure({

          key: this.stripeAPIKey,

          locale: 'auto',

          token: function (stripeToken: any) {

            console.log(stripeToken);

            alert('Payment has been successfull!');




          },

        });

      };




      window.document.body.appendChild(script);






    }

  }

  sucessenroll() {

    this.router.navigateByUrl('/video')

  }
  paymentHandler: any = null;

  stripeAPIKey: any = 'pk_test_51NXdakSAqi6ZKvm40OYZo40zhvJoFkJaUzQ6pz67hTlbaF8L9y6HEEm4dZJhZ2MRnqDZeQdFG78sgkaawOzYZGOU00pnRVJoFC';





  makePayment(amount: any) {

    const paymentHandler = (<any>window).StripeCheckout.configure({

      key: this.stripeAPIKey,

      locale: 'INR',

      token: function (stripeToken: any) {

        console.log(stripeToken);




      },



    });




    // alert('Enroll SucessFull')
    paymentHandler.open({

      name: 'Learning.Com',

      description: 'PLease pay to access',

      amount: amount * 100,

    });

    this.router.navigateByUrl('/video')

  }
}
