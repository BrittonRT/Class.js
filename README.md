Class.js
========

A simple inheritance pattern for javascript

Including this script exposes an object named Class which contains the method extend. Using extend on a function returns an object with the prototype of Class and a copy of the extend function bound to Class. That object can then use the extend method itself in order to form a simple model for inheritance.

Basic Usage
-----------

Thing = Class.extend()
<br/>
Thing.prototype.do = function(){ console.log('doing') }
<br/>

thing = new Thing()
<br/>
thing.do()  // outputs 'doing'
<br/>

Animal = Thing.extend()
<br/>

animal = new Animal();
<br/>
animal.do()  // outputs 'doing'
<br/>

Thing.prototype.do = function(){ console.log('cant') }
<br/>

animal.do()  // outputs 'cant'
<br/>

Thing.prototype === Animal.prototype  // true
<br/>

Animal.prototype.do = function() { console.log('wont') }
<br/>

thing.do()  // outputs 'cant'
<br/>

Thing.prototype.do === Animal.prototype.do  // false
<br/>

animal instanceof Animal  // true
<br/>
animal instanceof Thing   // true
<br/>
animal instanceof Class   // true
<br/>
