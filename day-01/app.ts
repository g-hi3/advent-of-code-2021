#!/usr/bin/env node

import * as fs from 'fs'
import { getIncreaseCount } from './getIncreaseCount'

const fileText = fs.readFileSync('./day-01/input.txt', 'utf-8')
const lines = fileText.split(/\r?\n/)
console.log(`There is a total of ${lines.length} lines in this file.`)

const input = lines.map(value => Number(value))
const increaseCount = getIncreaseCount(input);
console.log(`There are ${increaseCount} measurements that are larger than the previous measurement.`)