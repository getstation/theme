import { theme } from './jss';
export interface Coordinates {
    latitude: number;
    longitude: number;
}
export interface SunCalc {
    nauticalDusk: number;
    solarNoon: number;
    nightEnd: number;
    sunriseEnd: number;
    dusk: number;
    nauticalDawn: number;
    sunsetStart: number;
    goldenHour: number;
    goldenHourEnd: number;
    dawn: number;
    sunrise: number;
    sunset: number;
    night: number;
    nadir: number;
}
export declare class ThemeColorScheme {
    colors: Array<string>;
    duration: number;
    frameInterval: number;
    constructor(colors: Array<string>, duration: number, frameInterval: number);
}
export declare type ChooserItem = {
    title: string;
    description: string;
    value: any;
};
export declare type ThemeTypes = typeof theme;
