const express= require ('express')
const router =express.Router()
const quizControle = require('../controle/quizControle')


router.post('/addquestion',quizControle.create)//cb temchi
router.get('/question/:id',quizControle.read)//cb temchi 
router.put('/updatequestion/:id',quizControle.updatequiz)//cb temchi 
router.delete('/deletequestion/:id',quizControle.deletequiz)//cb temchi 




module.exports = router