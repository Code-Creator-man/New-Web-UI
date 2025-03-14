document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const posts = document.getElementById('posts');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = postContent.value.trim();
        if (content) {
            const post = document.createElement('div');
            post.className = 'post';
            post.textContent = content;
            posts.appendChild(post);
            postContent.value = '';
        }
    });
});
