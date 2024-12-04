import { path, root } from './util.js'

import fs from 'fs'
import webfontsGenerator from '@vusion/webfonts-generator'

const iconsPath = 'resources/icons'
const templatePath = 'resources/templates'
const fontsPath = 'public/fonts'

const fileList = fs.readdirSync(path.resolve(root, iconsPath))
const filesOption = fileList.map(fileName => path.resolve(root, iconsPath, fileName))

webfontsGenerator(
  {
    files: filesOption,
    dest: path.resolve(root, fontsPath),
    fontName: 'tsinput-font',
    rename: function (fileName) {
      return path.parse(fileName).name.split(/-(.*)/)[1]
    },
    templateOptions: {
      classPrefix: 'tsi-icon-',
      baseSelector: '.tsi-icon'
    },
    cssTemplate: path.resolve(root, templatePath, 'css.hbs')
  },
  function (error) {
    if (error) {
      console.log('Fail!', error)
    } else {
      console.log('Fonts created in:', path.resolve(root, fontsPath))
    }
  }
)
