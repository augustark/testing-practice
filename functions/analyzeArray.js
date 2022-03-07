export default function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, num) => sum + num) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  }
}