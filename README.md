# Resume

Resume of Kazuya Gosho built with Webpack + Pug + Postcss.

![](screenshot.png)

# How to use

After checking out the repo, run:

```
yarn install
yarn start
```

open localhost:3000 and you can see my resume.

Write your resume. `src/app.postcss` is for css, `src/index.pug` is for template.

# Configuration

Write your Webpack config.
If you want to write your resume with sass, just add `sass-loader`


# TODO

- [x] Add script for taking screenshot.
- [ ] Internationalization. currently I need `en` and `ja`. For the time being create `index.ja.pug`.
- [ ] Use Vue.js for template. This is for HMR and scoped CSS.
- [ ] Add script for build. Generate multilingual PDF to `/dist`.
- [ ] Create GitHub page or something to render this as actual web page.
