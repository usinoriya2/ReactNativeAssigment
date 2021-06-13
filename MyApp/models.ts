export interface Bird{
    name:string,
    views:number,
}

export interface ResponseData{
    info:Info,
    characters:Character[],
}

export interface Info{
    count:number,
    pages:number,
    next:string,
    prev:string
}


export interface Character{
    id:number,
    name:string,
    status:string,
    species:string,
    type:string,
    gender:string,
    origin:Origin,
    location:Location,
    image:string,
    url:string,
    episode:string[],
    created:string
}

export interface Origin{
    name:string,
    url:string
}

export interface Location{
    name:string,
    url:string
}
