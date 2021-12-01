export function getIncreaseCount(input: Number[]): Number {
    let increaseCount = 0
    let prevInput: Number = undefined
    input.forEach(line => {
        if (line > prevInput) {
            increaseCount++;
        }
        prevInput = line
    })
    return increaseCount
}