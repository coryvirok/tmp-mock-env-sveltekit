import { type PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run preview',
    port: 4173,
    stdout: 'pipe',
    stderr: 'pipe',
  },
  reporter: 'list',
  testDir: 'tests/e2e',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
}

export default config
