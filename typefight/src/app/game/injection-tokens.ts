import { InjectionToken } from '@angular/core';
import { ScreenConfig } from './screen/screen-config';
import { IGameManagerService, IGameConsumerService } from './services/game.service';

export const SCREEN_CONFIG = new InjectionToken<ScreenConfig>('ScreenConfig');
export const I_GAME_MANAGER_SERVICE = new InjectionToken<IGameManagerService>('IGameManagerService');
export const I_GAME_COSNUMER_SERVICE = new InjectionToken<IGameConsumerService>('IGameConsumerService');
