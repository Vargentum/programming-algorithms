/*
  Chain of responsibility pattern

  used for
*/


(() => {

  //Complaint

  class Complaint {
    constructor({name, type}) {
      this.name = name
      this.type = type
    }
  }

  class Clerk {
    constructor(args) {}
    isAbleToResolveComplaint(complaint) {
      return complaint.type === 'clerk' ? true : false
    }
    listenToComplaint(complaint) {
      return 'judged by clerk'
    }
  }

  class HandOfKing {
    constructor(args) {}
    isAbleToResolveComplaint(complaint) {
      return complaint.type === 'hand' ? true : false
    }
    listenToComplaint(complaint) {
      return 'judged by HandOfKing'
    }
  }

  class King {
    constructor(args) {}
    isAbleToResolveComplaint(complaint) {
      return true //can resolve all types of complaint
    }
    listenToComplaint(complaint) {
      return 'judged by King'
    }
  }

  class ComplaintResolver  {
    constructor() {
      this.complaintListeners = []
      this.complaintListeners.push(new Clerk())
      this.complaintListeners.push(new HandOfKing())
      this.complaintListeners.push(new King())
    }

    resolve(complaint) {
      this.complaintListeners.some((listener) => {
        if (listener.isAbleToResolveComplaint(complaint)) {
          console.log(listener.listenToComplaint(complaint))
          return listener
        }
      })
    }
  }

  const CR = new ComplaintResolver()

  CR.resolve(new Complaint({name: "simple", type: "clerk"})) //resolved by clerk
  CR.resolve(new Complaint({name: "hardest", type: "king"})) //resolved by king

})()