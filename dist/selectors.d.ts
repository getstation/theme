import * as Immutable from 'immutable';
export declare const getThemeColors: ((state: Immutable.Map<string, any>) => string[]) & {
    resultFunc: (res: Immutable.List<string>) => string[];
    recomputations: () => number;
    resetRecomputations: () => number;
};
