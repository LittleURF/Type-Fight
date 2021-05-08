import { GameScreenRouterService } from './../services/game-screen-router.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-game-screen',
	templateUrl: './game-screen.component.html',
	styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
  @Input() screen: Screen;

	constructor(private screenRouter: GameScreenRouterService) {}


  ngOnInit(): void {

  }
/*
  ROuting relatively doesnt really work when your module is in an outlet
  To allow routing inside the multiple screens, I suppose I'd need some kind of service, that will abstract away routing from this modules compoennts
  so ill be abel to call .navigate()/rel/root/ and it will make it an outlet navigation.
  How should it be detected which outlet it should be?
*/


  navigate(path: string): void {
    // navigate with using the screen outlet name somehow
    this.screenRouter.navigate();
  }
}
