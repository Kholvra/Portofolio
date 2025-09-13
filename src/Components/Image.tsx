type Props={
    source?: string
}

function Image({source}:Props){
    return <img src={source} alt="" className="size-full rounded-lg lg:grayscale lg:hover:grayscale-0 transition duration-300"/>
}

export default Image;