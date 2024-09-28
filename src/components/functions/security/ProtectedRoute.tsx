import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ProtectedRouteProps } from '@/lib/interfaces/security/routes';

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            router.push('/signin');
        } else if (allowedRoles && !allowedRoles.includes(session.user.role)) {
            router.push('/unauthorized');
        }
    }, [session, status, router, allowedRoles]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session || (allowedRoles && !allowedRoles.includes(session.user.role))) {
        return null;
    }

    return <>{children}</>;
}