import { Router } from "express"
import { usersRoutes } from "./users.routes"
import { postsRoutes } from "./posts.routes"
import { repostsRoutes } from "./reposts.routes"
import { commentsRoutes } from "./comments.routes"

const router = Router()

router.use('/users', usersRoutes)
router.use('/posts', postsRoutes)
router.use('/reposts', repostsRoutes)
router.use('/comments', commentsRoutes)

export { router }