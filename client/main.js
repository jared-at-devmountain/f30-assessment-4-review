const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const creationForm = document.getElementById("creation-form")
const nameInput = document.getElementById("name-input")
const powerLevelInput = document.getElementById("p-level-input")
const deletionForm = document.getElementById("delete-form")
const deleteIdInput = document.getElementById("delete-id-input")
const incForm = document.getElementById("inc-form")
const incIdInput = document.getElementById("inc-id-input")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then((response) => {
        const fortune = response.data
        alert(fortune)
    })
    .catch((error) => {
        console.log('You had an error! Behold: ')
        console.log(error)
    })
}

const createPerson = (event) => {
    event.preventDefault()

    const maBod = {
        name: nameInput.value,
        powerLevel: powerLevelInput.value,
    }

    nameInput.value = ''
    powerLevelInput.value = ''

    axios.post("http://localhost:4000/api/create/", maBod)
    .then((response) => {
        let db = response.data
        console.log(db)
    })
    .catch((err) => {
        console.log(err)
    })
}

function deletePerson(event) {
    event.preventDefault()

    deleteId = deleteIdInput.value

    axios.delete("http://localhost:4000/api/delete/" + deleteId)
    .then((response) => {
        let db = response.data
        console.log(db)
    })
    .catch(() => {})
}

function incPowerLevel(event) {
    event.preventDefault()

    incId = incIdInput.value

    axios.put("http://localhost:4000/api/increment/?id=" + incId)
    .then((response) => {
        let db = response.data
        console.log(db)
    })
    .catch(() => {})
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
creationForm.addEventListener('submit', createPerson)
deletionForm.addEventListener('submit', deletePerson)
incForm.addEventListener('submit', incPowerLevel)