const someThingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey!');
        }else {
            reject('nooo!');
        }
    })
}

someThingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))

const someThingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('true');
            }, 2000)
        } else {
            const error = new Error('Nooo!');
            reject(error);
        }
    })
}
someThingWillHappen2()
.then(response => console.log(response))

.catch(err => console.error(err))


Promise.all([someThingWillHappen(), someThingWillHappen2()])
.then(response => {
    console.log('Array of result', response)
})

.catch(err => {
    console.log(err)
})