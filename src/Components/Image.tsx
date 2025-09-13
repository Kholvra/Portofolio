type Props={
    source: string
}

function Image({source}:Props){
    return <img src={source} alt="" className="size-full rounded-lg"/>
}

export default Image;