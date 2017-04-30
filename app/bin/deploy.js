#!/usr/bin/env node
import deploy from '../utils/deploy'

/* eslint-disable no-console */
deploy()
  .catch((e) => {
    console.error(e)
    process.exitCode = 2
  })
