/// <reference types="react" />
import React from 'react';
export interface GradientProviderProps {
    themeColors: string[];
    children: React.Component;
}
export declare class GradientProvider extends React.Component<GradientProviderProps> {
    render(): JSX.Element;
}
export interface InjectedProps {
    themeGradient: string;
}
export declare enum GradientType {
    normal = 0,
    withOverlay = 1,
    withDarkOverlay = 2,
}
export declare const withGradient: (gradientType?: GradientType | undefined) => <P extends InjectedProps>(WrappedComponent: React.ComponentType<P>) => React.ComponentClass<Pick<P, ({ [P in keyof P]: P; } & {
    themeGradient: never;
} & {
    [x: string]: never;
})[keyof P]>>;
