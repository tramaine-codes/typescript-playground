export default {
  '*.{cjs,js,json,jsx,mjs,ts,tsx,md}':
    'biome format --fix --no-errors-on-unmatched',
  '*.{cjs,js,jsx,mjs,ts,tsx}': 'biome lint --fix --no-errors-on-unmatched',
};
