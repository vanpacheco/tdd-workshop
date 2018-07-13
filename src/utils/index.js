export const startCase = value =>
  value.toLowerCase().replace(/\b\w/g, initial => initial.toUpperCase());
