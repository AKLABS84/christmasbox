function inputWrite() {
  document.getElementById("first_page").style.display = 'none';
  document.getElementById("section1").style.visibility = 'visible';
  document.getElementById("section2").style.visibility = 'visible';

  my_audio = document.getElementById('audio');
  my_audio.play();
  result = document.getElementById("inputWrtie").value;
  document.getElementById("write").innerText = "호~호~호!🎅🏻" + "\n 2024년에도 착한일을 많이 하면\n" + result + " 선물을 꼭 받을 수 있을거야~" + "\n메리 크리스마스! 🎅🏻 ";


  document.getElementById("inputWrtie").style.display = 'none';
  document.getElementById("inputBtn").style.display = 'none';
}