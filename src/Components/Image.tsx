type Props={
    source?: string
    grayscale?: boolean
    brightnessFull?:boolean
    isCrop?:boolean
}


function Image({source,grayscale,brightnessFull,isCrop}:Props){
    const size = isCrop? "h-54 w-full object-cover" : "size-full"
    const variant = grayscale? "lg:grayscale lg:hover:grayscale-0" : brightnessFull? "brightness-100" :"brightness-70 hover:brightness-80"
    return <img src={source} alt="" className={`${size} rounded-lg ${variant} transition duration-300`}/>
}

export default Image;