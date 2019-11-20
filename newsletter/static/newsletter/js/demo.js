var trennlinie = document.querySelector("#trennlinie");
var spalte1 = document.querySelector("#spalte1");
var spalte2 = document.querySelector("#spalte2");
var spalte3 = document.querySelector("#spalte3");
var placeholder = document.querySelector(".placeholder");
// var editor = new FroalaEditor('#froala')

var spalte1Template = `
<h1 contenteditable="true">Eine Spalten-Layout</h1>`;

var spalte2Template = `
          <mj-button background-color="#F63A4D"
                 href="#">
        Promotion
      </mj-button>
`;

var textTemplate = `
<mj-section background-color="white" >
  <!-- Left image -->
  <mj-column>
    <mj-image width="200px"
              src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" />
              <mjml-text >Placeholder</mjml-text>
  </mj-column>
  <!-- right paragraph -->

  <mj-column>
    <mj-text font-style="italic"
             font-size="20px"
             font-family="Helvetica Neue"
             color="#626262">
        Find amazing places
      </mj-text>

      <mj-text color="#525252" contenteditable="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</mj-text>

  </mj-column>
  
  
</mj-section>`;

var currentlyDragging = null;

spalte1.addEventListener('dragstart', function () {
    currentlyDragging = "1";
});
spalte2.addEventListener('dragstart', function () {
    currentlyDragging = "2";
});
spalte3.addEventListener('dragstart', function () {
    currentlyDragging = "3";
});
trennlinie.addEventListener('dragstart', function () {
    currentlyDragging = "4";
});
placeholder.addEventListener('dragover', function (event) {
    event.preventDefault();
});

placeholder.addEventListener('drop', function () {
        if (currentlyDragging === "1") {
            placeholder.parentNode.querySelector(".creation-zone").innerHTML += spalte1Template;
        } else if (currentlyDragging === "2") {
            placeholder.parentNode.querySelector(".creation-zone").innerHTML += spalte2Template;
        } else if (currentlyDragging === "3") {
            placeholder.parentNode.querySelector(".creation-zone").innerHTML += textTemplate;
        } else if (currentlyDragging === "4") {
            placeholder.parentNode.querySelector(".creation-zone").innerHTML += trennlinieTemplate;
        }
    }
);





