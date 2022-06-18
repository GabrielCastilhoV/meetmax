import type { NextPage } from 'next'

import { FeedView } from 'views'

import { PageLayout } from 'components/layouts'

const Home: NextPage = () => {
  return (
    <PageLayout title="Feed">
      <FeedView />
    </PageLayout>
  )
}

export default Home
