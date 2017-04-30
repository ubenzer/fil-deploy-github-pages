#!/usr/bin/env node
import sync from '../utils/sync'

/* eslint-disable no-console */
sync()
  .catch((e) => {
    console.error(e)
    process.exitCode = 2
  })
