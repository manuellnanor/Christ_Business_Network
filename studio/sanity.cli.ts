import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vc4bpv7n',
    dataset: 'production'
  },
  deployment: {
    appId: 'gqvcfezrxcr4vcq2fta741wi',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
