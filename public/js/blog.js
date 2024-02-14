const newCommentFormHandler = async (event) => {
  event.preventDefault();
  console.log('newCommentFormHandler');
  const comment = document.querySelector('#comment').value.trim();
  const blog_id = document.querySelector('.btn-create').value;
  // console.log(title, funding, post);

  if (comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    // console.log(response);
    if (response.ok) {
      // Refresh the page to show the comment
      // https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentFormHandler);
