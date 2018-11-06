const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
  res.redirect(302, '/prototype')
})

router.get('/prototype/', function (req, res) {
  let loggedIn = req.session.data['logged_in']

  if (loggedIn === false) {
    res.redirect('/prototype/login')
  } else {
    res.render('prototype/index')
  }
})

router.post('/login', function (req, res) {
  let username = req.session.data['username']
  let password = req.session.data['password']

  if (username === 'spo2' && password === 'password') {
    req.session.data['logged_in'] = true
    res.redirect('/prototype/')
  } else {
    res.redirect('/login_error')
  }
})

router.get('/prototype/pom/:id', function(req, res) {
  let pomIndex = getPomIndex(req, req.params.id)
  res.render('prototype/pom', {'pomIndex': pomIndex})
})

router.get('/prototype/tiering/:id', function (req, res) {
  res.render('prototype/tiering', {'id': req.params.id})
})

router.get('/prototype/tiering-result/:id', function (req, res) {
  res.render('prototype/tiering-result', {'id': req.params.id})
})

router.get('/prototype/prisoner/:id', function (req, res) {
  res.render('prototype/prisoner', {'id': req.params.id})
})

router.get('/prototype/prisoner_info/:id', function (req, res) {
  res.render('prototype/prisoner_info', {'id': req.params.id})
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

router.post('/prototype/confirm-allocation/:prisoner_id', function (req, res) {
  res.render(
    'prototype/confirm_allocation',
    {
      'prisoner_id': req.params.prisoner_id,
      'pom_id': req.session.data['allocation']['pom_id']
    }
  )
})

router.post('/prototype/confirm_tiering/:prisoner_id', function (req, res) {
  confirmTiering(req)
  res.redirect('/prototype/allocations#awaiting-tiering')
})

router.get('/prototype/allocatepom/:prisoner_id/:pom_id', function (req, res) {
  let prisonerIndex = getPrisonerIndex(req, req.params.prisoner_id)
  let pomIndex = getPomIndex(req, req.params.pom_id)
  allocatePom(req, prisonerIndex, pomIndex);
  res.redirect('/prototype/allocations#awaiting-allocation')
})

function confirmTiering(req) {
  var prisoners = req.session.data.prisoners;
  var prisonerIndex = null;
  prisoners.forEach(function(prisoner, index) {
    if (prisoner.id === req.params.prisoner_id) {
      prisonerIndex = index;
    }
  });
  var prisoner = req.session.data.prisoners[prisonerIndex]
  prisoner.pom_type = req.session.data['allocate']
  req.session.data['allocate'] = null
}

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

function tierPrisoner(req) {
  var prisoners = req.session.data.prisoners;
  var prisonerIndex = null;
  prisoners.forEach(function(prisoner, index) {
    if (prisoner.id === req.params.id) {
      prisonerIndex = index;
    }
  });
  var pomType = Math.random() < 0.5 ? "Prison-POM" : "Probation-POM";
  var prisoner = req.session.data.prisoners[prisonerIndex]
  prisoner.tier = "C";
  prisoner.pom_type = pomType
}

module.exports = router
