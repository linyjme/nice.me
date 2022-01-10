/**
 * @file Random number
 * @module util.random
 * @author Surmon <https://github.com/surmon-china>
 */

export const randomNumber = (max: number): number => {
  return Math.floor(Math.random() * max) + 1
}
