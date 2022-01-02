import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbIconModule,NbMenuModule,NbThemeModule, NbLayoutModule,NbSidebarModule,NbButtonModule,NbInputModule, NbCardModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({name: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
