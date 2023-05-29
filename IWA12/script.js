const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
const book1 = {
status : document.getElementById("#book1"),
reserve : document.querySelector(".reserve"),
checkout : document.querySelector(".checkout"),
checkin : document.querySelector(".checkin"),
}

const book2 = {
    status : document.getElementById("#book2"),
    reserve : document.querySelector(".reserve"),
    checkout : document.querySelector(".checkout"),
    checkin : document.querySelector(".checkin"),
    }

const book3 = {
    status : document.getElementById("#book3"),
    reserve : document.querySelector(".reserve"),
    checkout : document.querySelector(".checkout"),
    checkin : document.querySelector(".checkin"),
}


book1.status.style = STATUS_MAP[shelf.color] ,
book1.reserve = (STATUS_MAP.status.canReserve) ? 'enabled' : 'disabled'
book1.checkout = (STATUS_MAP.status.canCheckout) ? 'enabled' : 'disabled'
book1.checkin = (STATUS_MAP.status.canCheckIn) ? 'enabled' : 'disabled'
    

book2.status = STATUS_MAP.status.color,
book2.reserve = (STATUS_MAP.status.canReserve) ? 'enabled' : 'disabled'
book2.checkout = (STATUS_MAP.status.canCheckout) ? 'enabled' : 'disabled'
book2.checkin = (STATUS_MAP.status.canCheckIn) ? 'enabled' : 'disabled'

book3.status = STATUS_MAP.status.color,
book3.reserve = (STATUS_MAP.status.canReserve) ? 'enabled' : 'disabled'
book3.checkout = (STATUS_MAP.status.canCheckout) ? 'enabled' : 'disabled'
book3.checkin = (STATUS_MAP.status.canCheckIn) ? 'enabled' : 'disabled'
