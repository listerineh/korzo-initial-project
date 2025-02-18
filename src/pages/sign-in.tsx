import { useEffect } from 'react';
import { useAuth } from '@workos-inc/authkit-react';

import { useRouter } from 'src/routes/hooks';

export default function SignIn() {
  const router = useRouter();
  const { user, signIn } = useAuth();

  useEffect(() => {
    if(user){
      router.push('/');
    }

    const handleSignIn = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const context = searchParams.get('context') ?? undefined;
      signIn({ context });
    };

    handleSignIn();
  }, [router, signIn, user]);

  return null;
}