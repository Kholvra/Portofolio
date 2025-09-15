type Props={
    source?: string
    grayscale?: boolean
    brightnessFull?:boolean
    isCrop?:boolean
}


function Image({source,grayscale,brightnessFull,isCrop}:Props){
    const size = isCrop? "h-34 md:h-64 w-full object-cover" : "h-64 md:h-120 w-full object-cover"
    const variant = grayscale? "lg:grayscale lg:hover:grayscale-0" : brightnessFull? "brightness-100" :"brightness-70 hover:brightness-80"
    return <img src={source} alt="" className={`${size} rounded-lg ${variant} transition duration-300`}/>
}

export default Image;