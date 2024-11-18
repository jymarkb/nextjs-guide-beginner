type Props = {
    params : Promise <{blogID: string, reviewID:string}>
}

export default async function Blogpage({ params }: Props){
    const {blogID, reviewID} = await params
    return <h1>Blog review { reviewID} on page {blogID}</h1>
}