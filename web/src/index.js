import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { useIsBrowser } from '@redwoodjs/prerender/dist/browserUtils'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

if (!global.__REDWOOD__PRERENDERING) {
  netlifyIdentity.init()
}

export default () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    {useIsBrowser() ? (
      <AuthProvider client={netlifyIdentity} type="netlify">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    ) : (
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
    )}
  </FatalErrorBoundary>
)
