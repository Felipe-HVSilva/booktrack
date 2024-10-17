import { afterAll, beforeEach } from 'vitest'
import { prisma } from './src/lib/prisma'
import { execSync } from 'child_process'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.test' })

async function setup() {
  execSync('docker compose up -d  --wait postgres_test')
  execSync('npx prisma db push')
}

beforeEach(async () => {
  await prisma.book.deleteMany({})
  await prisma.user.deleteMany({})
})

afterAll(async () => {
  setup()
})
