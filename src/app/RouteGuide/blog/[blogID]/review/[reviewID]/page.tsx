export default async function Blogpage({ params }: { params: { blogID: string, reviewID: string } }){
    const {blogID, reviewID} = await params
    return <h1>Blog review { reviewID} on page {blogID}</h1>
}