var fun = [
  'You\'ve never had sex this good. The stars aligned, everything was perfect, and nothing was awkward.',
  'Was.. was that it? This was terrible. It was long, awkward, and probably isn\'t worth talking about. Ever.',
  'Someone farted right when things got hot and now it\'s ruined.',
  'Someone got experimental. And didn\'t ask beforehand. But maybe it wasn\'t so bad...',
  'Missionary position. Maybe good, maybe bad, but probably boring. Unless that\'s your thing.',
  'You both needed a shower and why waste the water? It was absolutely fantastic!',
  'You don\'t remember starting on the floor, but that\'s where you ended up.',
  'Well, someone blew it early, leaving the other completely unsatisfied.',
  'It was like two strays met in the street and went at each other. You\'re both covered in scratches, bruises and bite marks.',
  'That round of boning was so good, you probably need a smoke, or drink, or whatever it is you do after a good time.'
      // 'Results go here', comma after each, \' for each apostrophe //
  ]

function newFun() {
  var randomResult = Math.floor(Math.random() * (fun.length));
  document.getElementById('ftbResults').innerHTML = fun[randomResult];
  }
