export const validateDescription = (description) => {
    if (description.trim() === '') {
        return 'La descripción es obligatoria.';
    }
    return null;
};