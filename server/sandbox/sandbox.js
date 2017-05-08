/**
 * This module create a factory used
 * to record all the modules of the application.
 * @module sandbox
 */

'use strict'

/**
 * sandbox factory
 */
module.exports = function sandboxFactory() {
  // Map used to register events
  const eventList = new Map()

  // Map used to save something to share
  const questions = new Map()


  /**
   * @param {string} question - string to identify the question.
   * @returns {boolean} true if the question is in the sandbox.
   */
  const hasAnswer = question => questions.has(question)

  /**
   * Resgister an answer to a question,
   * only one answer will be registered for each question if the value of the
   * registered question is a callback function.
   * @param {string} question - string to identify the question
   * @param {any} value - login to answer the question.
   * @returns {boolean} true if the answer is registered or false if is
   *  already an answer
   */
  const answer = (question, value) => {
    if (hasAnswer(question) && typeof questions.get(question) === 'function') {
      return false
    }

    // Otherwise, save the answer for a question.
    questions.set(question, value)
    return true
  }

  /**
   * Ask for an specific callback function registered in questions Map.
   * @param {string} question - string to identify the question
   * @param {Rest} data - Extended parameters passed to callback function.
   * @returns {any} the result of callback execution.
   */
  const ask = (question, ...data) => {
    const cb = questions.get(question)
    if (typeof cb === 'function') return cb(...data)
    return null
  }

  /**
   * Ask for an specific resource registered in questions Map.
   * @param {string} question - string to identify the question
   * @returns {any} the answer to a question if value is diferent to a Function
   */
  const askValue = (question) => {
    const cb = questions.get(question)
    if (typeof cb !== 'function') return cb
    return undefined
  }

  /**
   * This fire the event and call
   * all the functions linked to this particular event
   * @param {String} eventName - id to the event listener
   * @param {any} data - data to be passed as argument to the listener
   */
  const emit = (eventName, ...data) => {
    if (eventList.has(eventName)) {
      eventList.get(eventName).forEach(listener => listener(...data))
    }
  }

  /**
   * This associate each function to this particular event
   * @param {String} eventName - id to the event listener
   * @param {Function} callback - logic to be triggered when
   *  the event is emited
   */
  const on = (eventName, callback) => {
    !eventList.has(eventName) && eventList.set(eventName, new Set())
    eventList.get(eventName).add(callback)
  }

  // Expose aviable methods
  return Object.freeze({
    answer,
    ask,
    askValue,
    hasAnswer,
    emit,
    on
  })
}
