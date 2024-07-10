function previewProperty() {
    const form = document.getElementById('propertyForm');
    const formData = new FormData(form);

    const propertyPreview = {
        propertyFor: formData.get('propertyFor'),
        propertyType: formData.get('propertyType'),
        bedrooms: formData.get('bedrooms'),
        bathrooms: formData.get('bathrooms'),
        address: formData.get('address'),
        furnishing: formData.get('furnishing'),
        petsAllowed: formData.get('petsAllowed') ? 'Yes' : 'No',
        nonVegAllowed: formData.get('nonVegAllowed') ? 'Yes' : 'No',
        gym: formData.get('gym') ? 'Yes' : 'No',
        swimmingPool: formData.get('swimmingPool') ? 'Yes' : 'No',
        price: formData.get('price'),
        maintenance: formData.get('maintenance'),
        photos: formData.getAll('photos')
    };

    

    localStorage.setItem('propertyPreview', JSON.stringify(propertyPreview));
    window.location.href = 'property-preview.html';
    return false;

    
}
