"use client"; // to use context must be client
// import { getUserInfoCookie } from "@/lib/cookies";
import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";
export default function DashboardPage() {
    // const userInfo = await getUserInfoCookie();
    const { user, logout } = useAuth();
    return (
        <div>
            {
                user && <div className="space-y-4">
                    <span className="text-lg font-semibold">Welcome {user?.email}</span>

                    {
                        user?.role === "admin" && <div className="space-x-4">
                            <Link className="p-2 bg-blue-500 text-white rounded" href="/admin">Go to Admin</Link>
                        </div>
                    }
                    <button className="p-2 bg-red-500 text-white rounded" onClick={logout} >
                        Logout
                    </button>
                </div>
            }

            {
                !user && <div>
                    <Link href="/login">Go to Login</Link>
                    <Link href="/register">Go to Register</Link>
                </div>
            }

        </div>
    );
}