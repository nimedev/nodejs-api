/**
 * This module create a class used to record all the modules of the application.
 * @module sandbox
 */
'use strict'

/**
 * Class representing a sandbox object
 */
module.exports = class {
  /**
   * Create a sandbox object
   */
  constructor() {

  }

  /**
   * Register a module in the sandbox object.
   * @param {Object, Function} element - Module to register
   * @param {string} name - name of the module to register
   * @param {string} groupName - Used to register the module in a group object.
   *   if groupName is undefined register the element in sandbox root.
   */
  register(element, name, groupName) {
    // Register the module
    if (typeof groupName !== 'undefined') {
      // Create a new group object if no exists
      if (!this[groupName]) {
        this[groupName] = {}
      }

      // Register module in a group object
      this[groupName][name] = element
    } else {
      // Register module direct in sandbox root
      this[name] = element
    }
  }

  /**
   * Validate if a property is in the sandbox
   * @param  {Array/string} - Array or name of properties to check in sandbox
   *  object
   * @returns {boolean} true if all properties or property are in sandbox
   *  otherwise return false
   */
  validate(properties) {
    properties = (Array.isArray(properties)) ? properties : [properties]
    for (let property of properties) {
      if (!this[property]) {
        console.error(`Can't find ${property} in sandbox`)
        return false
      }
    }
    // return true if pass all validations
    return true
  }
}