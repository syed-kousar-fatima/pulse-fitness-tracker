export function calculateBmi(heightCm, weightKg) {
  const height = Number(heightCm) / 100;
  const weight = Number(weightKg);
  if (!Number.isFinite(height) || !Number.isFinite(weight) || height <= 0 || weight <= 0) return null;
  return Number((weight / (height * height)).toFixed(1));
}

export function getBmiLabel(bmi) {
  if (bmi < 18.5) return 'Below range';
  if (bmi < 25) return 'In a healthy range';
  if (bmi < 30) return 'Above range';
  return 'High range';
}
