const express = require('express')
const router = express.Router()
var Prisoners

// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
  req.session.data['logged_in'] = false
  Prisoners = req.session.data.prisoners
  res.render('index')
})

router.get('/prototype1/', function (req, res) {
  let loggedIn = req.session.data['logged_in']

  if (loggedIn === false) {
    res.redirect('/login')
  } else {
    res.render('prototype1/index')
  }
})

router.get('/prototype2/', function (req, res) {
  let loggedIn = req.session.data['logged_in']

  if (loggedIn === false) {
    res.redirect('/login')
  } else {
    res.render('prototype2/index')
  }
})

router.post('/home', function (req, res) {
  let username = req.session.data['username']
  let password = req.session.data['password']

  if (username === 'spo1' && password === 'password') {
    req.session.data['logged_in'] = true
    res.redirect('/prototype1/')
  } else if (username === 'spo2' && password === 'password') {
    req.session.data['logged_in'] = true
    res.redirect('/prototype2/')
  } else {
    res.redirect('/login_error')
  }
})

router.get('/prototype1/prisoner/:id', function (req, res) {
  res.render('prototype1/prisoner', {'id': req.params.id})
})

router.get('/prototype1/pom/:id', function (req, res) {
  res.render('prototype1/pom', {'id': req.params.id})
})

router.get('/prototype2/tiering/:id', function (req, res) {
  res.render('prototype2/tiering', {'id': req.params.id})
})

router.get('/prototype2/tiering-result/:id', function (req, res) {
  var prisoner = tierPrisoner(req);
  res.render('prototype2/tiering-result', {'id': req.params.id})
})

router.get('/prototype2/prisoner/:id', function (req, res) {
  res.render('prototype2/prisoner', {'id': req.params.id})
})

router.get('/login_error', function (req, res) {
  res.render('login', {'error': true})
})

router.get('/logout', function (req, res) {
  req.session.data['logged_in'] = false
  res.redirect('/')
})

router.get('/prototype2/allocatepom', function (req, res) {
  let index = getPrisonerIndex(req, req.session.data['prisonerId'])
  let pomIndex = req.session.data['allocatedPom']
  allocatePom(req, index, pomIndex);
  console.log(req.session.data.prisoners[index]);
  res.redirect('/prototype2/allocations')
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

function tierPrisoner(req) {
  var prisoners = req.session.data.prisoners;
  var prisonerIndex = null;
  prisoners.forEach(function(prisoner, index) {
    if (prisoner.id === req.params.id) {
      prisonerIndex = index;
    }
  });
  req.session.data.prisoners[prisonerIndex].tier = "C";
}

module.exports = router
