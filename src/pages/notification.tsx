import type { NextPage } from 'next'

import { NotificationView } from 'views'

import { PageLayout } from 'components/layouts'

const Notification: NextPage = () => {
  return (
    <PageLayout title="Notification">
      <NotificationView />
    </PageLayout>
  )
}

export default Notification
