module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    require('postcss-simple-vars')({
      variables: require('./src/css/variables.css.js')
    }),
  ]
}
