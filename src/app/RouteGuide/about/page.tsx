export function randomNumber({params}:{params: {n: int}}){
    return <i>{ Math.random()+ 1 }</i>;
}

export default function About(){
    return <h1>About  this is generated randomly {randomNumber(1)}</h1>
}