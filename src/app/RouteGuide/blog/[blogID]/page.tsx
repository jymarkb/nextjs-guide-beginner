export default async function Blogpage({ params }: { params: { blogID: string } }){
    const {blogID} = await params
    return <h1>Blog pageeeeeee {blogID}</h1>
}