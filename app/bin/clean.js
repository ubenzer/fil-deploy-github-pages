import debugc from 'debug'
import fs from 'fs-extra'
import {getOutPath} from '../config'
import globby from 'globby'
import path from 'path'

const debug = debugc('fil:site')

/* eslint-disable no-console */
// removes everything but .git from dist
const clean = async () => {
  const outPath = getOutPath()

  console.log('Cleaning dist folder...')

  const files = await globby(['*', '!.git/'], {cwd: outPath})

  await Promise.all(files.map((file) => {
    debug(`Removing "${file}"...`)
    return fs.remove(path.join(outPath, file))
  }))
}

export default clean
