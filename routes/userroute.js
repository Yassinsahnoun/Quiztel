const express= require ('express')
const router =express.Router()
const userControle = require('../controle/userControle')


router.get('/see_all_users',userControle.readall)
router.get('/user/:id',userControle.read)
router.post('/add_user',userControle.create)
router.put('/update_user/:id',userControle.update)
router.delete('/delete_user/:id',userControle.delete_user)





module.exports = router