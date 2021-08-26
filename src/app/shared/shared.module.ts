import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletRouterLinkPipe } from './pipes/outlet-router-link.pipe';

@NgModule({
	declarations: [OutletRouterLinkPipe],
	imports: [CommonModule],
	exports: [OutletRouterLinkPipe],
})
export class SharedModule {}
