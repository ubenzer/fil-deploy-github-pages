import path from 'path'

/* eslint-disable global-require */

export const getOutPath = () => {
  const fileName = path.join(process.cwd(), 'index.js')
  const filProject = require(fileName).default
  return filProject.outPath()
}

export const getRemoteRepoUrl = () => {
  const fileName = path.join(process.cwd(), 'index.js')
  const filProject = require(fileName)
  return filProject.deployConfig().remoteRepoUrl
}
