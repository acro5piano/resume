# Resume

Resume of Kazuya Gosho, built with Webpack + Pug + Postcss.

# Getting started

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

# Screenshot

To take a screenshot, just run

- `yarn start`
- `yarn screenshot`

This runs your Chrome headlessly and take an image.

# TODO

- [x] Add script for taking screenshot.
- [ ] Internationalization. currently I need `en` and `ja`. For the time being create `index.ja.pug`.
- [ ] Use React.js or Vue.js for template. This is for HMR and scoped CSS.
- [ ] Add script for build. Generate multilingual PDF to `/dist`.
- [ ] Create GitHub page or something to render this as actual web page.
  - [ ] Hopefully, change language interactively.

# Contribution

I am not a native English speaker, so if you find something wrong, please create an issue or send a pr.

Thanks in advance.
