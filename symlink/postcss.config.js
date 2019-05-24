/* eslint-disable */
module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
