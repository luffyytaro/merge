export default function validate(values){
    const errors = {};
    if(!values.username){
        errors.username = "username cannot be empty";
    }else if(!values.password) {
        errors.password = "password cannot be empty";
    }
    return errors;
}