import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
@NgModule({
  declarations: [AppComponent, PaymentsComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_52DU0HNaT3yQjlK5Mg5H6SER00DJsQHl0U')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
