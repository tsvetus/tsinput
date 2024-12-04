import { readdirSync } from 'fs'
import process from 'node:process'
import path from 'path'

const root = process.cwd()

const listDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(v => v.isDirectory())
    .map(v => v.name)

const listFiles = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(v => v.isFile())
    .map(v => v.name)

export { path, root, process, listDirectories, listFiles }
