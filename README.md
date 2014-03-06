Class.js
========

A simple inheritance pattern for javascript

Including this script exposes an object named Class which contains the method extend. Using extend on a function returns an object with the prototype of Class and a copy of the extend function bound to Class. That object can then use the extend method itself in order to form a simple model for inheritance.

Basic Usage
-----------

Thing = Class.extend()
Thing.prototype.do = function(){ console.log('doing') }

thing = new Thing()
thing.do()  // outputs 'doing'

Animal = Thing.extend()

animal = new Animal();
animal.do()  // outputs 'doing'

Thing.prototype.do = function(){ console.log('cant') }

animal.do()  // outputs 'cant'

Thing.prototype === Animal.prototype  // true

Animal.prototype.do = function() { console.log('wont') }

thing.do()  // outputs 'cant'

Thing.prototype.do === Animal.prototype.do  // false

animal instanceof Animal  // true
animal instanceof Thing   // true
animal instanceof Class   // true
