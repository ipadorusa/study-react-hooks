import React, { Suspense } from 'react'

const Repeat2 = React.lazy(() => import('../../Repeat_again'))

function LazyExamComponent() {
  return (
    <div>
      page2
      <Suspense fallback={<div>Loading...</div>}>
        <Repeat2 />
      </Suspense>
    </div>
  )
}

export default LazyExamComponent
