export default function validateAddNote(values) {
    let errors = {}

    if (!values.title) {
        errors.title = "Title is required"
    }
    if (!values.body) {
        errors.body = "Body is required"
    }
    if (!values.author) {
        errors.author = "Author is required"
    }
    return errors;
}
