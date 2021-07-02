const eyeButtons = document.querySelectorAll('.btn-eye')

if (eyeButtons.length > 0) {
    for (let i = 0; i < eyeButtons.length; i++) {
        const eyeBtn = eyeButtons[i]
        eyeBtn.addEventListener('click', function (e) {
            const inputFieldName = eyeBtn.getAttribute('data-check-field')
            const currentInputField = document.getElementById(inputFieldName)
            changeInputType(currentInputField, eyeBtn)
            e.preventDefault()
        })
    }
}

function changeInputType (inputField, eyeButton) {
    if (inputField) {
        if (!inputField.classList.contains('changed-type')) {
            inputField.classList.add('changed-type')
            eyeButton.classList.add('changed-eye')
            inputField.type = 'text'
        } else {
            inputField.classList.remove('changed-type')
            eyeButton.classList.remove('changed-eye')
            inputField.type = 'password'
        }
    }
}