import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletRouterLinkDirective } from './directives/outlet-router-link.directive';
import { OutletRouterLinkPipe } from './pipes/outlet-router-link.pipe';

@NgModule({
	declarations: [OutletRouterLinkDirective, OutletRouterLinkPipe],
	imports: [CommonModule],
	exports: [OutletRouterLinkPipe],
})
export class SharedModule {}
