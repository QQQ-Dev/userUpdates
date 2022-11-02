const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const router = Router()
const Comment = require('../models/Comment')


// /api/comments
router.get(
    '/',
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при регистрации'
                })
            }

            const comments = await Comment.find().exec()

            return res.status(200).send({ data: comments })



        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
)

// /api/
router.post(
    '/',
    async (req, res) => {
        try {
            const {body, username, parentId, userId} = req.body

            if (!body && !username && !parentId && !userId ) {
                return res.status(400).send('bad request, missing properties, try again')
            } else {
                const comment = await Comment({body, username, parentId, userId})
                await comment.save()    
                return res.status(201).send('created')
            }
        } catch (e) {
            return res.status(400).send('bad request')
        }
    }
)

module.exports = router
