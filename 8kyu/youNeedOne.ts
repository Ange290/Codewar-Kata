
export const check = (a: (number | string)[], x: number | string): boolean => {
  if (a.includes(x)) {
  return true;  
  } else {
    return false;
  }
}
