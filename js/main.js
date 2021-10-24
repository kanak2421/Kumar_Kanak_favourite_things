(() => {
  console.log('fired');

  let textContainer = document.querySelector('.text-container');
      textContainer2 = document.querySelector('.text-container2');
      textContainer3 = document.querySelector('.text-container3');
      textContainer4 = document.querySelector('.text-container3');
      textButton = document.querySelector('button');

      bioButtons1 = document.querySelectorAll(".bioButtons1 button");
      bioButtons2 = document.querySelectorAll(".bioButtons2 button");
      bioButtons4 = document.querySelectorAll(".bioButtons4 button");


  const dataContainer = [""];



  const ListeningSongs = ["Derrik Campbell -" + " Digital Illustrator," + " studying Interactive Media Design" + " Interests: Drawing, Painting, Logo design and Science Fiction."];
  const GraphicDesigning = ["Derrik Campbell -" + " Digital Illustrator," + " studying Interactive Media Design" + " Interests: Drawing, Painting, Logo design and Science Fiction."];
  const Photography  = ["Jonathan Teves -" + " Content creator, and Social Media Management" + " Currently Studying Interactive Media Design", " Interests: Soccer, NFL, Music Production."];




  function showBioInfo1() {
    arrayIndex = this.dataset.arrayref;
    textContainer2.textContent = ListeningSongs;
  }

  function showBioInfo2() {
    arrayIndex = this.dataset.arrayref;
    textContainer3.textContent = GraphicDesigning;
  }

  function showBioInfo4() {
    arrayIndex = this.dataset.arrayref;
    textContainer3.textContent = Photography;
  }

  function joinArray() {
    textContainer.textContent = newContainer.join(" ");
  }

  dataContainer.forEach((word, index) => {
    textContainer.textContent += word;
    console.log(index);
  });

  for (let i=0; i<dataContainer.length; i++) {
    console.log(i, dataContainer[i]);

    textContainer.textContent += dataContainer[i];
  }

  textContainer.textContent += "Click on the buttons to find out more! ";
  textButton.addEventListener("click", joinArray);


  bioButtons1.forEach(button => button.addEventListener('click', showBioInfo1));
  bioButtons2.forEach(button => button.addEventListener('click', showBioInfo2));
  bioButtons4.forEach(button => button.addEventListener('click', showBioInfo4));

})();
