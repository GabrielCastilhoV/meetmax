import type { NextPage } from 'next'

import { CommunityView } from 'views'

import { PageLayout } from 'components/layouts'

const Community: NextPage = () => {
  return (
    <PageLayout title="Community">
      <CommunityView />
    </PageLayout>
  )
}

export default Community
