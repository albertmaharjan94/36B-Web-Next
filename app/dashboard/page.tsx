import { getUserInfoCookie } from "@/lib/cookies";

export default async function DashboardPage() {
    const userInfo = await getUserInfoCookie();
    return (
        <div>
            Welcome { userInfo?.email || 'Not Logged In'}
        </div>
    );
}