const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#entry-name').value.trim();
    const description = document.querySelector('#entry-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/entries`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create entry');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/entries/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete entry');
      }
    }
  };
  
  document
    .querySelector('.new-entry-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.entry-list')
    .addEventListener('click', delButtonHandler);