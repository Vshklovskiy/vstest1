<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package vstest1
 */
?>
<!DOCTYPE html>
<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
<head>
  <meta charset="utf-8">
	<title>VS Test</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="wp-content/themes/vstest1/style-vstest1.css?<? echo time(); ?>">
	<script type="text/javascript" src="wp-content/themes/vstest1/js/vstest1.js?<? echo time(); ?>"></script>
</head>

<body>

<div id="parent" class="parent">
  <div id="carousel" class="carousel">
    <button class="arrow prev"><</button>
    <div class="gallery">
      <ul class="images" id="carousel_ul">
      </ul>
    </div>
    <button class="arrow next">></button>
  </div>
</div>

<div id="overlay">
	<div id="overlayParent" class="parent">
		<img id="overlayImg" src="https://via.placeholder.com/600/d32776">
	</div>
</div>

</body>
</html>
