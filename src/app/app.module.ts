import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './product/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, WelcomeComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
