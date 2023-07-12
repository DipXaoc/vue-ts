let result:number = 0;

export const calculation = function (bool: boolean | null): number {
    return bool === null ? result : bool ? result++ : result--;
}
