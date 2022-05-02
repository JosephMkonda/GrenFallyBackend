'use strict'

const express = require('express')

const application = require('../Controllers/appController').sending_application
const count = require('../Controllers/appController').countAll
const details = require('../Controllers/appController').allWithDetails
const shortlist =  require('../Controllers/appController').markComplete 
const history = require('../Controllers/appController').prevShort
const prevBen = require('../Controllers/appController').prevBen
const prevApp = require('../Controllers/appController').prevApp
const add = require('../Controllers/appController').addBeneficiary
const getAllShortlisted = require('../Controllers/appController').statusComplete
const countAllShortlisted = require('../Controllers/appController').countAllShortlisted

const router = express.Router()


router.post('/send_application', application)
router.get('/countAll', count)
router.get('/countAllShortlisted', countAllShortlisted)
router.get('/allApplications', details)
router.get('/markComplete', shortlist)
router.get('/getPrev', history)
router.get('/getPreBen', prevBen)
router.get('/getPreApp', prevApp)
router.get('/statusComplete', getAllShortlisted)
 
router.get('/getBeneficiaries',require('../Controllers/appController').getBeneficiaries)

//router.get('/prev', require('../Controllers/appController').prevShortlisted)
router.post('/add', add)

module.exports = router