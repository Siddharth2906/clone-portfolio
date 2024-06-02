function toggleForm() {
    const formContainer = document.getElementById('form-container');
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    
   } 
 else {
        formContainer.style.display = 'none';
    }
}


function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}