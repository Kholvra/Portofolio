type Props={
    source?: string
    grayscale?: boolean
}


function Image({source,grayscale}:Props){
    const grayscaleOption = grayscale? "lg:grayscale lg:hover:grayscale-0" : "brightness-70 hover:brightness-100"
    return <img src={source} alt="" className={`size-full rounded-lg ${grayscaleOption} transition duration-300`}/>
}

export default Image;