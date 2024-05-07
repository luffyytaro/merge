function validate(values) {
    console.log(values);
    const errors = {};
    if(!/[a-z0-9A-Z]{4,12}/.test(values.username)){
        errors.username = "Invalid username";
    }else if (!/[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,6}/.test(values.email)){
        errors.email = "Invalid Email"
    }else if (!/[\w/W]{8,24}/.test(values.password)){
        errors.password = "Invalid password"
    }else if(values.password!== values.cpassword){
        errors.password = "passwords do not match"
    }
    return errors;
}
export default validate;