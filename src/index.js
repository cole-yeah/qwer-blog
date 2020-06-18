const fs = require('fs')
const path = require('path')

const scssTpl = require('../template/scss')
const pageTpl = require('../template/page')
const config = require('../config/index')

const { datas, folder } = config

const mkdirFunc = async (dirname, a) => {
  
  if(fs.existsSync(dirname)) {
    return true
  }
  
  const res = await fs.mkdirSync(dirname).catch(err => err)
  console.log('-- success --', res)
}

const handleAction = (err) => {
  if(err) {
    console.log('xx fail xx', err)
    return true
  }
  console.log('-- success --')
}

const touchFile = ({
  file,
  type
}) => {
  if(type === 'page') {
    fs.writeFile(`${folder}/${file}/index.scss`, scssTpl(), handleAction)
    fs.writeFile(`${folder}/${file}/index.js`, pageTpl(), handleAction)
  }
}

datas.map((data) => {
  const { file } = data
  const completeUrl = `${folder}/${file}`
  if(mkdirFunc(completeUrl)) {
    touchFile(data)
  }
})