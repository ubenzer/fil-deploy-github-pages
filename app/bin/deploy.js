#!/usr/bin/env node
import {addAll, commit, push} from '../git'
import fs from 'fs-extra'
import {getOutPath} from '../config'
import moment from 'moment'
import path from 'path'

/* eslint-disable no-console */

// commit all changes in dist to git
// push
const deploy = async () => {
  const outPath = getOutPath()

  console.log('Deploying...')
  const deployDate = moment().format()
  const message = `Fil-deploy at ${deployDate} 🙌`

  await fs.writeFile(path.join(outPath, '.fildeploy.txt'), deployDate)
  await addAll()
  await commit({message})
  await push()
}

export default deploy
