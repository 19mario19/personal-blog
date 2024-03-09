import { writable } from "svelte/store"

const localStorageList = writable<string[]>([])

// localStorageList.subscribe((v) => console.log("LS store: ", v))


enum LSNames {
  Test = "test"
  // add names here first when creating new ls
}
// make initialname type enum
// constructor(intialName: LSNames)



/**
 * Interface for a local storage utility.
 * @template T - The type of data stored in local storage.
 */
interface ILocalStorage<T> {
  /**
   * Sets the value in local storage under a given name.
   * @param {T} value - The value to be stored.
   * @returns {void}
   */
  set(value: T): void

  /**
   * Retrieves the value from local storage by name.
   * @returns {T | null} The retrieved value, or null if not found.
   */
  get value(): T | null
}

/**
 * Class representing a local storage utility.
 * @template T - The type of data stored in local storage.
 */
class CLocalStorage<T> implements ILocalStorage<T> {
  /**
   * Creates an instance of CLocalStorage.
   * @param {string} initialName - The initial name to use for local storage.
   */
  constructor(private name: string) {
    localStorageList.update((v) => [this.name, ...v])
  }

  /**
   * Sets the value in local storage under the specified name.
   * @param {T} value - The value to be stored.
   * @returns {void}
   */
  set(value: T): void {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(this.name, JSON.stringify(value))
    }
  }

  /**
   * Retrieves the value from local storage by name.
   * @returns {T | null} The retrieved value, or null if not found.
   */
  get value(): T | null {
    if (typeof localStorage !== "undefined") {
      const item = localStorage.getItem(this.name)
      return item ? JSON.parse(item) : null
    }
    return null
  }

  /**
   * Retrieves the value from local storage by name using a static method.
   * @static
   * @param {string} name - The name of the item in local storage.
   * @returns {T | null} The retrieved value, or null if not found.
   */
  static get(name: string) {
    if (typeof localStorage !== "undefined") {
      const item = localStorage.getItem(name)
      return item ? JSON.parse(item) : null
    }
    return null
  }
}

export { CLocalStorage }
