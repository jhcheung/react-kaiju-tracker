// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const kaijusURL = 'http://localhost:4000/kaijus/'
const sightingsURL = 'http://localhost:4000/sightings'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchKaijus = () => fetch(kaijusURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more kaiju fetches

export const createKaiju = (newKaiju) => {
    const createKaijuObj = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(newKaiju)
    }

    return fetch(kaijusURL, createKaijuObj)
            .then(parseData)
            .catch(catchError)
}

export const editKaiju = (modKaiju) => {
    const editKaijuObj = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(modKaiju)
    }

    return fetch(kaijusURL + modKaiju.id, editKaijuObj)
            .then(parseData)
            .catch(catchError)
}


export const deleteKaiju = (kaiju) => {
    const delKaijuObj = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }
    return fetch(kaijusURL + kaiju.id, delKaijuObj)
            .then(parseData)
            .catch(catchError) 
}
//////////////////////////////////////////////////////

// Fetches for sightings, will return a promise
// GET /sightings
export const fetchSightings = () => fetch(sightingsURL)
.then(parseData)
.catch(catchError)

export const createSighting = (newSighting) => {
    const createSightingObj = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(newSighting)
    }

    return fetch(sightingsURL, createSightingObj)
            .then(parseData)
            .catch(catchError)
}


// TODO: define a few more sighting fetches
