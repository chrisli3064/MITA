export default function validateInfo(values) {
    let errors = {}
    
    if (!values.firstname.trim()) {
        errors.firstname = 'first name required';
    }
    if (!values.lastname.trim()) {
        errors.lastname = 'last name required';
    }

    if (!values.email){
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email address is invalid';
    }
    return errors;
}    