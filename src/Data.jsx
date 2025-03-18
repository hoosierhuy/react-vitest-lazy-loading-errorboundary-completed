import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const LazyData = lazy(() => import('./LazyData'))

function Data() {
  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button type="button" onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>Taylor Swift is coming for us all...</div>}>
        <LazyData />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Data
