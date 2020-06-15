//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    let x
    let n = arr.length - 1
    console.log("this is n", n)
    let i = 0
    let sum1 = 0
    let sum2 = 0
    while (n >= 0) {
        sum1 += arr[n][i]
        sum2 += arr[i][i]
        console.log("this is banana", arr[n][i])
        console.log("this is pineapple", arr[i][i])
        console.log("this is sum1", sum1)
        console.log("this is sum2", sum2)
        i++
        n--
        console.log("this is i", i)
        console.log("this is n", n)
    }
    if (sum1 > sum2) {
        x = sum1 - sum2
        console.log("this is x", x)
    }
    else {
        x = sum2 - sum1
        console.log("this is x", x)

    }
    console.log("this is x", x)

    return x

}
console.log(diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]))