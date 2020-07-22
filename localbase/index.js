"use strict"

// TODO: add promises to readme, then publish
// TODO: update - do I need to put the class properties into variables at the top? if not, remove
// TODO: handle more errors
// TODO: switching from one collection to another doesn't seem to work
// TODO: option to disable localbase logs in development
// TODO: database editor

// import localForage
import * as localForage from "localforage";

// import api methods
import collection from './api/selectors/collection'
import doc from './api/selectors/doc'

import orderBy from './api/filters/orderBy'
import limit from './api/filters/limit'

import get from './api/actions/get'
import add from './api/actions/add'
import update from './api/actions/update'
import set from './api/actions/set'
import deleteIt from './api/actions/delete'

// import api utils
import reset from './api-utils/reset' // must be called after every action
import selectionLevel from './api-utils/selectionLevel'
import success from './api-utils/success'
import error from './api-utils/error'

// Localbase
class Localbase {
  constructor(dbName) {
    localForage.config({
      driver      : localForage.INDEXEDDB,
      name        : dbName
    });

    // properties
    this.dbName = dbName
    this.collectionName = null
    this.orderByProperty = null
    this.orderByDirection = null
    this.limitBy = null
    this.docSelectionCriteria = null

    // api
    this.collection = collection.bind(this)
    this.doc = doc.bind(this)

    this.orderBy = orderBy.bind(this)
    this.limit = limit.bind(this)

    this.get = get.bind(this)
    this.add = add.bind(this)
    this.update = update.bind(this)
    this.set = set.bind(this)
    this.delete = deleteIt.bind(this)
    
    // api utils
    this.reset = reset.bind(this)
    this.selectionLevel = selectionLevel.bind(this)
    this.success = success.bind(this)
    this.error = error.bind(this)
  }
}

export default Localbase