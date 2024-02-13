const newProjectFormHandler = async (event) => {
  event.preventDefault();
  console.log('newProjectFormHandler');
  const name = document.querySelector('#project-name').value.trim();
  const funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  console.log(name, funding, description);

  if (name && funding && description) {
    const response = await fetch('/api/project', {
      method: 'POST',
      body: JSON.stringify({ name, funding, description }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newProjectFormHandler);
