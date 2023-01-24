import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PassDataToChildComponent } from './pass-data-to-child/pass-data-to-child.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildComponent } from './child/child.component';
import { ToWayBindingComponent } from './to-way-binding/to-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { UsdInrPipe } from './currencyPipes/usd-inr.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RedElDirective } from './red-el.directive';
import { DirectivesComponent } from './directives/directives.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    PassDataToChildComponent,
    ParentToChildComponent,
    ChildComponent,
    ToWayBindingComponent,
    PipesComponent,
    UsdInrPipe,
    FormComponent,
    ReactiveFormComponent,
    RedElDirective,
    DirectivesComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqsComponent,
    NoPageComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    FooterComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
