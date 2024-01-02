setInterval(() => {
  function removePostsByAuthor(authorHandle) {
    let posts = Array.from(document.querySelectorAll('.tweet'));
    posts.forEach(post => {
      let author = post.querySelector('.tweet-header-handle').textContent;
      if (author === authorHandle) {
        let likeButton = post.querySelector('.tweet-button.tweet-interact-favorite.tweet-interact-favorited');
        if (likeButton) {
          likeButton.click();
        }
      }
    });
  }

  // Call the function with the author's handle
  removePostsByAuthor('@USERNAME'); // Case sensitive (must match exactly)
  window.scrollTo(0, document.body.scrollHeight)
}, 1000)
