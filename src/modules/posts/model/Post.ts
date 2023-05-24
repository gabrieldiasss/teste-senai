import { v4 as uuidV4 } from 'uuid'

class Post {
    id?: string
    title: string
    description: string
    content: string

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Post }