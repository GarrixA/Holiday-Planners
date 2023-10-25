const validate = (values ) =>{
    let errors = {};

    if (!values.fullname){
        errors.fullname ="input name!"
    }
    if (!values.email){
        errors.email ="email required!"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="invalid email"
    }

    if (!values.password){
        errors.password="input password"
    }else if(values.password.length < 6){
        errors.password="less chars"
    }
    return errors
}

export default validate;