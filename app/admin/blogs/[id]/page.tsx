export default async function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    // fetch blog with id and display it
    return (
        <div>
            BlogId : {id}
        </div>
    );
}