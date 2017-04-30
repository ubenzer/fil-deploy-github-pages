#!/usr/bin/env node
import clean from '../utils/clean'

/* eslint-disable no-console */
clean()
  .catch((e) => {
    console.error(e)
    process.exitCode = 2
  })
