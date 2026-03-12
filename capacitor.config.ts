import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.guangsu.losa',
  appName: 'FLYNOTE',
  webDir: 'dist',
  server: {
    cleartext: true, // Allow http://localhost:8080
  },
}

export default config
