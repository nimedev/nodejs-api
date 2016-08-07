/**
 * Used to wrap all methods that need this component from the application
 * sandbox.
 * Set the main sandbox reference befores call any other functions.
 * @module user-sandbox
 */
'use strict'

// A reference to main sandbox
let mainSandbox

/**
 * Functions that need this component to get from the main sandbox
 */
module.exports = {
  // Reflected functions
  methodToReflect: (param1, param2) => {
    return mainSandbox.methodToReflect(param1, param2)
  },

  /**
   * Set a reference to the main sandbox
   * @param {Object} sandbox - Reference to main sandbox object.
   */
  setMainSandbox: sandbox => mainSandbox = sandbox
}