import { theme } from './jss';

export interface Coordinates {
  latitude: number,
  longitude: number
}

export interface SunCalc {
  nauticalDusk: number,
  solarNoon: number,
  nightEnd: number,
  sunriseEnd: number,
  dusk: number,
  nauticalDawn: number,
  sunsetStart: number,
  goldenHour: number,
  goldenHourEnd: number,
  dawn: number,
  sunrise: number,
  sunset: number,
  night: number,
  nadir: number,
}

export class ThemeColorScheme {
  public colors: Array<string>;
  public duration: number;
  public frameInterval: number;

  constructor(colors: Array<string>, duration: number, frameInterval: number) {
    this.colors = colors;
    this.duration = duration;
    this.frameInterval = frameInterval;
  }
}

export type ChooserItemTypes = {
  title: string,
  description: string,
  value: any,
}

export type ThemeTypes = typeof theme;
