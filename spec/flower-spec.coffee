describe "Flower", ->
  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage 'atom-flower'
