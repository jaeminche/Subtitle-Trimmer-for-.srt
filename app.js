//
// function readTextFile(file) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.open("GET", file, false);
//   rawFile.onreadystatechange = function() {
//     if (rawFile.readyState === 4) {
//       if (rawFile.status === 200 || rawFile.status == 0) {
//         var allText = rawFile.responseText;
//         alert(allText);
//       }
//     }
//   };
//   rawFile.send(null);
// }
// readTextFile(
//   "file:///C:/Users/pegas/Programming/my-own-projects/dblectures/files/dec7.srt"
// );
var input;
var openFile = function(event) {
  input = event.target;

  var reader = new FileReader();
  reader.onload = function() {
    var text = reader.result.replace(/[0-9,:,-->,\n]/g, "");
    var node = document.getElementById("output");
    node.innerText = text;
  };
  reader.readAsText(input.files[0]);
};

var trim = function() {
  var getContent = document.getElementById("output");

  newContent = getContent.textContent.replace(/[0-9,:,-->,\n]/g, "");
  var filename = document.getElementsByClassName("filename")[0];
  filename.innerHTML = input.value;
  filename.style.fontWeight = "bolder";

  getContent.innerHTML = newContent;
};

// let str = `asdasd5678`;

// str = str.replace(/[0-9,:,-->,\n]/g, "");
// console.log(str);
// const br = "<br>";
// document.write(str);
// document.write(br);
