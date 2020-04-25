import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FilterRecipePipe } from './filter-recipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodDetailComponent,
    FilterRecipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
