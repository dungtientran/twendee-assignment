

export interface IUsers {
    id: {
        name: string,
        value: string
    }
    gender: string
    email: string
    dob:{
        date: string,
        age:number
    }
    cell: string,
    location: {
        city: string,
        coordinates: {
            latitude: string,
            longitude: string
        }
        country: string,
        postcode: number,
        state: string,
        street: {
            name: string,
            number: number
        }
        timezone: {
            description: string,
            offset: string
        }
    }
    login: {
        md5: string,
        password: string,
        salt: string,
        sha1: string,
        sha256: string,
        username: string,
        uuid: string
    }
    name: {
        first: string,
        last: string,
        title: string
    }
    nat: string
    phone: string
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
    registered: {
        age: number,
        date: string
    }
}


export interface IPage {
    info: {
        page: number,
        results: number,
        seed: string,
        version: string
    }
    results: IUsers[]
}


