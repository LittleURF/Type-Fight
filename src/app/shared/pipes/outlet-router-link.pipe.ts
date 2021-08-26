import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'outletRouterLink',
})
export class OutletRouterLinkPipe implements PipeTransform {
	transform(route: string[], outlet: string): { outlets: any[] }[] {
		const routerLinkObject = [
			{
				outlets: [],
			},
		];

		routerLinkObject[0].outlets[outlet] = route;

		return routerLinkObject;
	}
}
