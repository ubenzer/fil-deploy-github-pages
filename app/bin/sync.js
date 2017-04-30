import {addAll, clone, pull, reset} from '../git'
import debugc from 'debug'
import fs from 'fs-extra'
import {getOutPath} from '../config'
import path from 'path'

const debug = debugc('fil:site')

/* eslint-disable no-console */

// checks if dist folder has .git repo, if not clones it
// resets all changes
// pulls latest changes from remote
const sync = async () => {
  const outPath = getOutPath()

  console.log('Syncing remote repo into local...')
  const gitDirectory = path.join(outPath, '.git')

  const hasGit = await fs.access(gitDirectory, fs.constants.W_OK)
    .then(() => true)
    .catch(() => false)

  debug(`Has git? ${hasGit}`)

  if (!hasGit) {
    console.log('Removing everything in dist folder...')
    await fs.emptyDir(outPath)
    await clone()
  }

  await addAll()
  await reset()
  await pull()
}

export default sync
