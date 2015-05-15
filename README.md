# sqv
qooxdoo themes and more for qx.Desktop applications

<img src="http://sqville.com/examples/images/sqv/clean-logo-2.svg" \>Clean
===========
<<<<<<< HEAD
A theme for qx.Desktop + It's objective is to live up to it's name + Inspired by Semantic UI
<br>
Coming Soon
<br><br>

=======
Coming Soon - A theme for qx.Desktop + It's objective is to live up to it's name + Inspired by Semantic UI
<br><br><br><br>
>>>>>>> origin/master

FontAwesome for qx.Desktop
==========================
The fully integrated way of using Font Icons in your qx.Desktop application.

To use:

<b>Step 1</b> Download sqv<br><br>
<b>Step 2</b> Download the latest FontAwesome zip file from the FontAwesome github site - http://fortawesome.github.io/Font-Awesome/ <br><br>
<b>Step 3</b> Copy the contents of the FontAwesome "fonts" folder to the empty "sqv\source\resource\sqv\fonts" folder <br><br>
<b>Step 4</b> Link sqv to your qx.Desktop project as a library by adding the following library entry to your app's config.json file:

	"library" :
      [
        {
          "manifest" : "${QOOXDOO_PATH}/application/sqv/Manifest.json"
        }
      ]

<b>Step 5</b> Add the following lines of qooxdoo code to the start of the main function of your application (replace "sqv.theme.clean.Appearance|Decoration|Font" with the class names of the theme your app is currently using)

	// Add font and text properties to the qx Image widget
	qx.Class.include(qx.ui.basic.Image, sqv.ui.basic.MImage);
	  
	// Add the beforeContent property to the Decorator class
	qx.Class.include(qx.ui.decoration.Decorator, sqv.ui.decoration.MBeforeContent);
	 
	// Add FontAwesome specific Appearance, Decoration and Font entries to the current theme 
	qx.Theme.include(sqv.theme.clean.Appearance, sqv.fonticon.FontAwesome.Appearance);
	qx.Theme.include(sqv.theme.clean.Decoration, sqv.fonticon.FontAwesome.Decoration);
	qx.Theme.include(sqv.theme.clean.Font, sqv.fonticon.FontAwesome.Font);

<b>Step 6</b> Run "generate.py source" in the command line to link the sqv project files to your application <br><br>

<b>Step 7</b> Create an image in your application and set its appearance property to "fa-search"

	//stand alone icon example
    var faiconsearch = new qx.ui.basic.Image().set({appearance:"fa-search"});
    
    //example button with a fonticon
    //the appearance "search-button" is an example appearance found in sqv.iconfont.FontAwesome.Appearance
    var button = new qx.ui.form.Button("Icon Button", "");
    button.setAppearance("search-button");
    
<b>Step 8</b> Run your project and see the results


Demos
===========
Clean Theme (with FontAwesome icons) for qx.Desktop: http://sqville.com/examples/qxthemes/clean/index.html
