
import IsOdd from './FirstTest'

it('5 is odd, because it is not divisible by 2',()=>
{
  const num = 5;
  const expected = true;
  expect(IsOdd(num)).toBe(expected)
})

