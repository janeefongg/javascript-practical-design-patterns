#Structural Pattern
Concerned with how objects are made up and simplify relationships between objects.

- Deal with the relationship of objects
- Alter composition of objects
- Extend functionality/Simplify functionality
- How an object relates to a separate object

##Decorator
Used to add functionality to an existing object, without being obtrusive.

- More complete inheritance
- Wraps an object
- Protects existing objects
- Allows adding extended functionality

##Facade
Used to provide a simplified interface to a complicated system.

- Think about the front of a building (clean exterior interface)
- Facade hides the chaos/complexity from us
- Simplifies the interface
- Maintains same functionality
- Ex: jQuery

##Flyweight
Conserves memory by sharing portions of an object between objects.
(Our task example had lots of non-unique data)

- Share data across across objects
- Results in a smaller memory footprint (good for mobile)
- Like a boxer (a flyweight)
- Note: Only useful if you have large numbers of objects