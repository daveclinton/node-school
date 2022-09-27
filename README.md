FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
Hello World

# Exercise 1 of 18 01.js

# Task

Write a function that takes an input string and returns it uppercased.

## Arguments

- input: a String of random words (lorem ipsum).

## Boilerplate

    function upperCaser(input) {
      // SOLUTION GOES HERE
    }

    module.exports = upperCaser

Higher Order Functions

# Exercise 2 of 18

A higher-order function is a function that does at least one of the following:

- Take one or more functions as an input
- Output a function

All other functions are first order functions. [1]

Unlike many other languages with imperative features, JavaScript allows you to utilize higher-order functions because it has "first-class functions". This means functions can be treated just like any other value in JavaScript: just like Strings or Numbers, Function values can be stored as variables, properties on objects or passed to other functions as arguments. Function values are actually Objects (inheriting from Function.prototype) so you can even add properties and store values on them, just like any regular Object.

The key difference between Functions and other value types in JavaScript is the call syntax: if a reference to a function is followed by parenthesis and some optional comma-separated values: someFunctionValue(arg1, arg2, etc), then the function body will be executed with the supplied arguments (if any).

In this exercise we're going to demonstrate that functions can be passed as values by passing you a function as an argument.

# Task

Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.

## Arguments

- operation: A Function, takes no arguments, returns no useful value.
- num: the number of times to call `operation`
