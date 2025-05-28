function uploadFile() {
  document.getElementById('fileInput').click();
}

function handleFileUpload() {
  document.querySelector('form').submit();
}

function inputText() {
  document.getElementById('textInputContainer').style.display = 'block';
}

function searchFile() {
  const gifs = [
    'static/gifs/blob.gif',
    'static/gifs/blob(1).gif',
    'static/gifs/blob(2).gif',
    'static/gifs/blob(3).gif',
    'static/gifs/blob(4).gif',
    'static/gifs/blob(5).gif'
  ];
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  window.open(randomGif, '_blank');
}
