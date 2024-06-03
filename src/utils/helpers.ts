export const fractionMap: { [key: string]: string } = {
  '1/2': 'half',
  '1/3': 'one-third',
  '2/3': 'two-thirds',
  '1/4': 'one-fourth',
  '3/4': 'three-fourths',
  '1/8': 'one-eighth',
  '3/8': 'three-eighths',
  '5/8': 'five-eighths',
  '7/8': 'seven-eighths',
};

export const cupToMl = (cups: number): number => {
  return Math.round(cups * 237);
};

export const gcd = (a: number, b: number): number => {
  return b ? gcd(b, a % b) : a;
};

export const floatToFraction = (num: number): string => {
  if (Number.isInteger(num)) {
    return num.toString();
  }

  const precision = 1.0e-6;
  let numerator = num;
  let denominator = 1;

  while (Math.abs(Math.round(numerator) - numerator) > precision) {
    numerator *= 10;
    denominator *= 10;
  }

  numerator = Math.round(numerator);
  const gcdValue = gcd(numerator, denominator);

  numerator = numerator / gcdValue;
  denominator = denominator / gcdValue;

  return `${numerator}/${denominator}`;
};

export const floatToIngredientMeasurement = (num: number, unit: string): string => {
  if (unit === 'cup') {
    const ml = cupToMl(num);
    return `${ml} ml`;
  }

  const wholePart = Math.floor(num);
  const fractionalPart = num - wholePart;

  let fractionalStr = '';
  if (fractionalPart > 0) {
    const fraction = floatToFraction(fractionalPart);
    fractionalStr = fraction;
  }

  const wholeStr = wholePart > 0 ? `${wholePart}` : '';
  const space = wholePart > 0 && fractionalStr ? ' ' : '';

  return `${wholeStr}${space}${fractionalStr}`.trim();
};