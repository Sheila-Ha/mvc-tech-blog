const newBlogFormHandler = async (event) => {
  event.preventDefault();
  // console.log('newBlogFormHandler');
  const title = document.querySelector('#blog-title').value.trim();
  const funding = document.querySelector('#blog-funding').value.trim();
  const post = document.querySelector('#blog-post').value.trim();

  // console.log(title, funding, post);

  if (title && funding && post) {
    const response = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ title, funding, post }),
      headers: { 'Content-Type': 'application/json' },
    });
    // console.log(response);
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newBlogFormHandler);
