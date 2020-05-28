const post = function() {

  const comments = [];
  let number = 1,
  likeCount = 0;

  const button = document.getElementById('button');
  const input = document.getElementById('input');
  const ul = document.getElementById('ul');

  function addComment() {

    button.addEventListener('click', function() {

      let text = input.value;

      if (input.value === '') {
        return
      }

      newPost(text);
      input.value = '';
      input.focus();
    })

  }

  function newPost(text) {

    const comment = {
      id: number++,
      text: input.value,
      likeCount: likeCount
    }

    const li = document.createElement('li');
    li.textContent = comment.text;
    li.classList.add('list__task');

    const likeImg = document.createElement('img');
    likeImg.src = './img/unliked.svg';
    likeImg.classList.add('list__likeImg')

    const span = document.createElement('span');
    span.textContent = comment.likeCount;
    span.classList.add('list__span')

    const buttonLike = document.createElement('button');
    buttonLike.textContent = ' + ';

    const buttonDislike = document.createElement('button');
    buttonDislike.textContent = ' - ';

    li.appendChild(likeImg);
    li.appendChild(span);
    li.appendChild(buttonLike);
    li.appendChild(buttonDislike);
    ul.appendChild(li);

    buttonLike.addEventListener('click', function(event) {
      comment.likeCount++;
      span.textContent = comment.likeCount;

      if (comment.likeCount > 0) {
        likeImg.src = './img/liked.svg';
      }

    })

    buttonDislike.addEventListener('click', function(event) {
      comment.likeCount--;
      span.textContent = comment.likeCount;

      if (comment.likeCount < 1) {
        likeImg.src = './img/unliked.svg';
      }

      if (comment.likeCount < -10) {
        const comment = event.target.parentNode;
        comment.remove();
        console.log(comments)
        
      }
    })

    comments.push(comment);
    console.log(comments);
  }
  return {
    addComment: addComment
  }
}()
