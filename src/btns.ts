export const increment = function (sum: number = 0): number {

    sum++
    console.log(sum);
    return sum
}

export const decrement = function (sum: number = 0): number {
    console.log(sum);
    return sum++
}