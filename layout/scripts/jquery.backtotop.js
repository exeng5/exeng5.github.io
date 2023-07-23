/* The grid: Four equal columns that floats next to each other */
.column {
    float: left;
    width: 25%;
    padding: 10px;
  }
  
  /* Style the images inside the grid */
  .column img {
    opacity: 0.8;
    cursor: pointer;
  }
  
  .column img:hover {
    opacity: 1;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* The expanding image container (positioning is needed to position the close button and the text) */
  .container {
    position: relative;
    display: none;
  }
  
  /* Expanding image text */
  #imgtext {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    font-size: 20px;
  }
  
  /* Closable button inside the image */
  .closebtn {
    position: absolute;
    top: 10px;
    right: 15px;
    color: white;
    font-size: 35px;
    cursor: pointer;
  }
  