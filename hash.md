---
layout: default
title: Hash
permalink: /hash/
custom_css: hash
---

<head>
    <meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>

<script src="{{ site.baseurl }}/assets/js/hash.js"></script>
<script src="https://cdn.jsdelivr.net/gh/emn178/js-sha256/build/sha256.min.js"></script>
<script>
function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (10+element.scrollHeight)+"px";
}
function myFunction() {
  var x = document.getElementById("input");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
</script>
<script>method = sha256;</script>
<script>input-type = text;</script>
<script>auto-update = 1;</script>

<style>
input[type="checkbox"] {
  appearance: auto;
  float: left;
}
.hash-main {
  display: flex;
  /* flex-wrap: wrap; */
}
.hash-area {
  flex: 60%;
}
.hash-area textarea {
  resize: none;
  white-space: normal;
  vertical-align: middle;
  text-align: justify;
  text-align-last: center;
}
.hash-area-in textarea{
  width: 85%;
}
button.visible {
  padding: 0px;
  margin: 0px;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background-color: grey;
  border-width: 0;
  color: white;
  border-radius: 5px;
  display:inline-block;
  vertical-align: top;
}

.hash-area-out {
  margin-top: 1em;
}
.hash-area-out textarea{
  width: 85%;
}
input#copyoutput {
  width: 35px;
  height: 35px;
  font-size: 0.6em;
  background-color: grey;
  border-width: 0;
  color: white;
  border-radius: 5px;
  display:inline-block;
  vertical-align: top   ;
}

.hash-options {
  /* flex: 30%; */
  /* float: right */
  margin-left: 30px;
}
.hash-options legend {
  margin-bottom: 0.5em;
  font-size: 1.2em;
}
.option input {
  width: 50px;
  border-width: 0px;
}

label {
  float: left;
  width: 90px;
  margin-right: 10px
  /* min-width: 300px; */
  /* min-width: max-content; */
}
</style>

<div class="hash-main">
  <div class="hash-area">
      <h1>Hash with SHA256</h1>
      <div class="hash-area-in">
          <textarea onkeyup="textAreaAdjust(this)" style="overflow:hidden" id="input" placeholder="Input"></textarea>
          <button class="visible" onclick="myFunction()">
          <img src="https://img.icons8.com/ios/50/000000/visible--v1.png">
          </button>

      </div>
      <div class="hash-area-out">
          <textarea readonly id="output" placeholder="Output"></textarea>
          <input type="button" id="copyoutput" value="Copy"/>
      </div>
      <input id="auto-update" type="checkbox" value="1" checked="checked">
  </div>
  <div class="hash-options">
    <legend>Options</legend>
    <div class="options-block">
      <div class="option">
        <label for="show input">show input</label>
        <input type="checkbox" onclick="myFunction()">
      </div>
      <div class="option">
        <label for="from">from</label>
        <input type="number" id="from" name="from" min=1 value=1>
      </div>
    </div>
    <div class="options-block">
      <div class="option">
        <label for="to">to</label>
        <input type="number" id="to" name="to" min=1>
      </div>
    </div>
    <div class="options-block">
      <div class="option">
        <label for="prefix">prefix</label>
        <input id="prefix" name="prefix">
      </div>
    </div>
    <div class="options-block">
      <div class="option">
        <label for="suffix">suffix</label>
        <input id="suffix" name="suffix">
      </div>
    </div>
  </div>
<!-- </div> -->
  <!-- <div class="hash-options" id="form">
    <legend>Options</legend>
    <div class="form-group">
      <label for="from" class="col-sm-2 control-label">from</label>
      <div class="col-sm-6">
        <input class="form-control" type="number" id="from" name="from" min=1 value=1>
      </div>
    </div>
    <div class="form-group">
      <label for="to" class="col-sm-2 control-label">to</label>
      <div class="col-sm-6">
        <input class="form-control" type="number" id="to" name="to">
      </div>
    </div>  
    <div class="form-group">
      <label for="prefix" class="col-sm-2 control-label">prefix</label>
        <div class="col-sm-6">
          <input name="prefix" class="form-control">
        </div>
    </div>
    <div class="form-group">
      <label for="suffix" class="col-sm-2 control-label">suffix</label>
        <div class="col-sm-6">
          <input name="suffix" class="form-control">
        </div>
    </div>
  </div> -->
</div>


<!-- 
        <div class="option" style="display:flex; flex-direction: row; justify-content: center; align-items: center">
          <label for="from">from</label>
          <input type="number" id="from" name="from" min=1 value=1>
        </div>
        <div class="option" style="display:flex; flex-direction: row; justify-content: center; align-items: center">
          <label for="to">to</label>
          <input type="number" id="to" name="to">
        </div>
    </div> -->

<script type="text/javascript">
    var button = document.getElementById("copyoutput"),
        input = document.getElementById("output");
    button.addEventListener("click", function(event) {
        event.preventDefault();
        input.select();
        document.execCommand("copy");
    });
</script>
