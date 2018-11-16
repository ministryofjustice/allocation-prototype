const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
  res.redirect(302, '/prototype')
})

router.get('/caseload', function(req, res) {
  res.render('prototype/caseload')
})

router.post('/login', function (req, res) {
  let username = req.session.data['username']
  let password = req.session.data['password']

  if (username === 'moic' && password === 'password1234') {
    req.session.data['logged_in'] = true
    res.redirect('/prototype/')
  } else {
    res.redirect('/login_error')
  }
})

router.get('/prototype/', function (req, res) {
  let loggedIn = req.session.data['logged_in']

  if (loggedIn === false) {
    res.redirect('/prototype/login')
  } else {
    res.render('prototype/index')
  }
})

router.get('/prototype/new-cases', function (req, res) {
  res.render('prototype/new-cases')
})

router.get('/prototype/approaching-handover', function (req, res) {
  res.render('prototype/approaching-handover')
})

router.get('/prototype/pom/:id', function (req, res) {
  let pomIndex = getPomIndex(req, req.params.id)
  res.render('prototype/pom', {'pomIndex': pomIndex})
})

router.get('/prototype/prisoner-allocation/:id', function (req, res) {
  res.render('prototype/prisoner_allocation', {'id': req.params.id})
})

router.get('/prototype/prisoner/:id', function (req, res) {
  res.render('prototype/prisoner', {'id': req.params.id})
})

router.get('/new_email', function (req, res) {
  res.render('prototype/new_email')
})

router.get('/login_error', function (req, res) {
  res.render('login', {'error': true})
})

router.get('/logout', function (req, res) {
  req.session.data['logged_in'] = false
  res.redirect('/')
})

router.get('/prototype/confirm_allocation/:prisoner_id/:pom_id', function (req, res) {
  res.render('prototype/confirm_allocation', {'prisoner_id': req.params.prisoner_id, 'pom_id': req.params.pom_id})
})


router.get('/prototype/override_and_confirm_allocation/:prisoner_id/:pom_id', function (req, res) {
  res.render('prototype/override_and_confirm_allocation', {'prisoner_id': req.params.prisoner_id, 'pom_id': req.params.pom_id})
})


router.get('/prototype/allocatepom/:prisoner_id/:pom_id', function (req, res) {
  let prisonerIndex = getPrisonerIndex(req, req.params.prisoner_id)
  let pomIndex = getPomIndex(req, req.params.pom_id)
  allocatePom(req, prisonerIndex, pomIndex);
  res.redirect('/prototype/allocations#awaiting-allocation')
})


function allocatePom(req, prisonerIndex, pomIndex) {
  req.session.data.prisoners[prisonerIndex].allocated = true
  req.session.data.prisoners[prisonerIndex].allocation_date = (new Date()).toLocaleDateString('en-GB')
  req.session.data.prisoners[prisonerIndex].pomIndex = parseInt(pomIndex)
}

function getPrisonerIndex(req, id) {
  var prisoners = req.session.data.prisoners;
  var prisonerIndex = null;
  prisoners.forEach(function(prisoner, index) {
    if (prisoner.id === id) {
      prisonerIndex = index;
    }
  });
  return prisonerIndex;
}

function getPomIndex(req, id) {
  var id = parseInt(id);
  var poms = req.session.data.poms;
  var pomIndex = null;
  poms.forEach(function(pom, index) {
    if (pom.id === id) {
      pomIndex = index;
    }
  });
  return pomIndex;
}

module.exports = router
