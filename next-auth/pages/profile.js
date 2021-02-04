import { useSession } from 'next-auth/client'
import dynamic from 'next/dynamic'

import UnauthenticatedComponent from '../components/unauthenticated'
import AuthenticatedComponent from '../components/authenticated'

export default function Profile() {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return <p>Loading...</p>

  if (!session) return <UnauthenticatedComponent />

  return <AuthenticatedComponent user={session.user} />
}