#! /usr/bin/env node
import * as fs from 'fs'
import path from 'path'

export function main() {
  try {
    console.log('hello')
    fs.cpSync(
      path.join(__dirname, '..', 'src', 'template', 'base'),
      process.cwd(),
      {
        recursive: true,
      }
    )
  } catch (error) {
    console.log('🚀 ~ main ~ error:', error)
  }
}

main()
