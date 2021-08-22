import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavComponent } from './nav/nav.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [AppComponent, NavComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule, EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
