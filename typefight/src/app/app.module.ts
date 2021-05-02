import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
	declarations: [AppComponent, NavComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
