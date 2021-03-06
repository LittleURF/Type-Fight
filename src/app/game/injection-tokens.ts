import { InjectionToken } from '@angular/core';
import { ScreenConfig } from './screen/screen-config';

export const SCREEN_CONFIG = new InjectionToken<ScreenConfig>('ScreenConfig');
export const SCREENS_CONFIG = new InjectionToken<ScreenConfig[]>('ScreenConfig');
