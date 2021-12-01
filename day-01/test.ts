import * as assert from 'assert'
import { getIncreaseCount } from "./getIncreaseCount"

describe('getIncreaseCount()', () => {
    
    it('returns 0 for empty input', async () => {
        const increaseCount = getIncreaseCount([])
        assert.equal(increaseCount, 0)
    })

    it('returns 0 for singleton input', async () => {
        const increaseCount = getIncreaseCount([5])
        assert.equal(increaseCount, 0)
    })

    it('returns 2 for ascending input of 3', async () => {
        const increaseCount = getIncreaseCount([1, 2, 3])
        assert.equal(increaseCount, 2)
    })

    it('returns 0 for descending input of 3', async () => {
        const increaseCount = getIncreaseCount([3, 2, 1])
        assert.equal(increaseCount, 2)
    })

    it('returns 0 for input of two equal numbers', async () => {
        const increaseCount = getIncreaseCount([2, 2])
        assert.equal(increaseCount, 0)
    })

    it('returns number of increasing input', async () => {
        const increaseCount = getIncreaseCount([5, 16, 2, 21, 23, 15])
        assert.equal(increaseCount, 3)
    })

})