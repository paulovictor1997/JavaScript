//Validate fields
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const fields = [
        {
            id: 'name',
            label: 'Nome',
            validator: nameIsValid
        },
        {
            id: 'last_name',
            label: 'Sobrenome',
            validator: nameIsValid
        },
        {
            id: 'birthdate',
            label: 'Nascimento',
            validator: dateIsValid
        },
        {
            id: 'email',
            label: 'E-mail',
            validator: emailIsValid
        },
        {
            id: 'password',
            label: 'Senha',
            validator: passwordIsSecure
        },
        {
            id: 'confirm_password',
            label: 'Confirmar senha',
            validator: passwordMatch
        }
    ]
    
    const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>'

    fields.forEach(function (field) {
        const input = document.getElementById(field.id)
        const inputBox = input.closest('.input-box')
        const inputValue = input.value

        const errorSpan = inputBox.querySelector('.error')
        errorSpan.innerHTML = ''

        inputBox.classList.remove('invalid')
        inputBox.classList.add('valid')

        const fieldValidator = field.validator(inputValue)

        if (!fieldValidator.isValid) {
            errorSpan.innerHTML = `${errorIcon} ${fieldValidator.errorMessage}`
            inputBox.classList.add('invalid')
            inputBox.classList.remove('valid')
            return
        } 
    })

    const genders = document.getElementsByName('gender')
    const radioContainer = document.querySelector('.radio-container')
    const genderErrorSpan = radioContainer.querySelector('.error')

    const selectedGender =  [...genders].find(input => input.checked)
    radioContainer.classList.add('invalid')
    radioContainer.classList.remove('valid')
    genderErrorSpan.innerHTML = `${errorIcon} Selecione um gênero!`

    if (selectedGender) {
        radioContainer.classList.add('valid')
        radioContainer.classList.remove('invalid')
        genderErrorSpan.innerHTML = ''
        return
    }
})

function isEmpty(value) {
    return value === ''
}

function nameIsValid(value) {
    const validator = {
        isValid: true,
        errorMessage: null
    };

    if (isEmpty(value)) {
        validator.isValid = false
        validator.errorMessage = 'O campo é obrigatório!'
        return validator
    }

    const min = 3;
    if (value.length < min){
        validator.isValid = false
        validator.errorMessage = `O nome deve ter no mínimo ${min} caracteres!`
        return validator
    }

    const regex = /^[a-zA-Z]/;
    if (!regex.test(value)) {
        validator.isValid = false;
        validator.errorMessage = 'O campo deve conter apenas letras!'
    }

    return validator
}

function dateIsValid(value) {
    const validator = {
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validator.isValid = false
        validator.errorMessage = 'O nascimento é obrigatório!'
        return validator
    }

    const year = new Date(value).getFullYear();

    if (year < 1920 || year > new Date().getFullYear()) {
        validator.isValid = false;
        validator.errorMessage = 'Data inválida!'
        return validator
    }

    return validator
}

function emailIsValid(value) {
    const validator = {
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validator.isValid = false
        validator.errorMessage = 'O e-mail é obrigatório!'
        return validator
    }

    const regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
    if (!regex.test(value)) {
        validator.isValid = false;
        validator.errorMessage = 'O e-mail precisa ser válido!'
        return validator
    }

    return validator
}

function passwordIsSecure(value) {
    const validator = {
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validator.isValid = false
        validator.errorMessage = 'O senha é obrigatória!'
        return validator
    }

    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")

    if (!regex.test(value)) {
        validator.isValid = false;
        validator.errorMessage = `
            Sua senha deve conter ao menos: <br/>
            8 dígitos <br/>
            1 letra minúscula <br/>
            1 letra maiúscula  <br/>
            1 número </br>
            1 caractere especial!
        `
        return validator
    }

    return validator
}

function passwordMatch(value) {
    const validator = {
        isValid: true,
        errorMessage: null
    }

    const passwordValue = document.getElementById('password').value
    
    if (value === '' || passwordValue !== value) {
        validator.isValid = false
        validator.errorMessage = 'Senhas não condizem!'
        return validator
    }

    return validator
}

//Passoword change icons
const passwordIcons = document.querySelectorAll('.password-icon')

passwordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.form-control')
        input.type = input.type === 'password' ? 'text' : 'password'
        this.classList.toggle('fa-eye')
    })
})