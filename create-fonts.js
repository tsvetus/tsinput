const fs = require('fs')
const path = require('path')
const webfontsGenerator = require('@vusion/webfonts-generator')

const iconsPath = 'resources/icons'
const fontsPath = 'public/fonts'

const fileList = fs.readdirSync(path.resolve(__dirname, iconsPath))
const filesOption = fileList.map(fileName => path.resolve(__dirname, iconsPath, fileName))

// console.log(filesOption)

webfontsGenerator(
  {
    files: filesOption,
    dest: path.resolve(__dirname, fontsPath),
    fontName: 'tsinput-font',
    rename: function (fileName) {
      return path.parse(fileName).name.split(/-(.*)/)[1]
    },
    templateOptions: {
      classPrefix: 'tsi-icon-',
      baseSelector: '.tsi-icon'
    }
  },
  function (error) {
    if (error) {
      console.log('Fail!', error)
    } else {
      console.log('Fonts created in:', path.resolve(__dirname, fontsPath))
    }
  }
)
