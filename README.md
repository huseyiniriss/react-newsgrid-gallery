# react-newsgrid-gallery

> A react grid gallery widget !

[![NPM](https://img.shields.io/npm/v/react-newsgrid-gallery.svg)](https://www.npmjs.com/package/react-newsgrid-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-newsgrid-gallery
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-newsgrid-gallery'
import 'react-newsgrid-gallery/dist/index.css'

class Example extends Component {
  render() {
    return <NewsGridGallery
               data={[{title: 'title 1'}, {title: 'title 2'}, {title: 'title 3'}, {title: 'title 4'}]}
               renderItem={({title}) => (<div>{title}</div>)}
               grid={[
                 {w: 30, h: 50, x: 0, y: 0},
                 {w: 40, h: 100, x: 30, y: 0},
                 {w: 30, h: 50, x: 70, y: 0},
                 {w: 30, h: 50, x: 0, y: 50},
                 {w: 30, h: 50, x: 70, y: 50},
               ]}
           />
  }
}
```

## License

MIT © [huseyiniriss](https://github.com/huseyiniriss)
