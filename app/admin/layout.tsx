import Link from "next/link";
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {/* Header */}
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <Link href="/admin/blogs" className="text-blue-400 hover:underline">Manage Blogs</Link>
            </header>
            {children}
        </section>
    );
}