const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const funding = document.querySelector('#blog-funding').value.trim();
  const post = document.querySelector('#blog-post').value.trim();

  if (title && funding && post) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, funding, post }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'GET',
    });
    
    const blog = await response.json();
    //console.log(blog);

    if (response.ok) {
      // Go to the edit page for this blog ID
      document.location.replace('/edit/' + blog.id);
    } else {
      alert('Failed to find blog');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

if (document.querySelector('.btn-delete') != null) {
  document
    .querySelector('.btn-delete')
    .addEventListener('click', delButtonHandler);
}

if (document.querySelector('.btn-edit') != null) {
  document
    .querySelector('.btn-edit')
    .addEventListener('click', editButtonHandler);
}
