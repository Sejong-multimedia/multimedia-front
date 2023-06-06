export const isDefined = <T>(value: T | undefined | null): value is T => {
    return value !== undefined && value !== null;
};

export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => value !== undefined;

export const isNotNull = <T>(value: T): value is Exclude<T, null> => value !== null;
