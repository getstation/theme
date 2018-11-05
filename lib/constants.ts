// @ts-ignore: no declaration file
import LinkedMap from 'linked-map';
import ms from 'ms';

import { ThemeColorScheme } from './types';

// In ms
export const QUICK_DURATION = ms('2sec');
export const QUICK_INTERVAL = 42;

// TODO: fix this
// export const SLOW_DURATION = process.env.STATION_QUICK_TRANSITIONS === '1' ? ms('30sec') : ms('10min');
// export const SLOW_INTERVAL = process.env.STATION_QUICK_TRANSITIONS === '1' ? 167 : ms('10sec');
export const SLOW_DURATION = ms('10min');
export const SLOW_INTERVAL = ms('10sec');

export const DEFAULT_SUNCALC = { dawn: 6, sunrise: 7, midday: 12, afternoon: 14, sunset: 20, night: 22 };

export enum Theme {
  dawn = 'dawn',
  sunrise = 'sunrise',
  morning = 'morning',
  midday = 'midday',
  afternoon = 'afternoon',
  sunset = 'sunset',
  night = 'night',
}

export const COLORS = new LinkedMap();
COLORS.push('dawn', new ThemeColorScheme(
  ['#1D092E', '#38154C', '#6C3272', '#E898A0'],
  SLOW_DURATION,
  SLOW_INTERVAL
));
COLORS.push('sunrise', new ThemeColorScheme(
  ['#0F3B6E', '#164D7F', '#B76B4F', '#EF984F'],
  SLOW_DURATION,
  SLOW_INTERVAL
));
COLORS.push('morning', new ThemeColorScheme(
  ['#85A9C4', '#C5C7C6', '#DFD2C0', '#F1B87C'],
  SLOW_DURATION,
  SLOW_INTERVAL
));
COLORS.push('midday', new ThemeColorScheme(
  ['#4372AA', '#81AADE', '#A3C4EC', '#BAD7F0'],
  QUICK_DURATION,
  QUICK_INTERVAL
));
COLORS.push('afternoon', new ThemeColorScheme(
  ['#276AAE', '#428CCA', '#68A9DF', '#8ACBF2'],
  QUICK_DURATION,
  QUICK_INTERVAL
));
COLORS.push('sunset', new ThemeColorScheme(
  ['#0F3B6E', '#164D7F', '#B76B4F', '#EF984F'],
  QUICK_DURATION,
  QUICK_INTERVAL
));
COLORS.push('night', new ThemeColorScheme(
  ['#213655', '#385679', '#4A7496', '#7272A0'],
  QUICK_DURATION,
  QUICK_INTERVAL
));
