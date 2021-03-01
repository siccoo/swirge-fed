export default function validate(values) {
    let errors = {};

    if (!values.fullname.trim()) {
        errors.fullname = 'First Name required';
    }
}