/* ************************************************************************

   SQville Software

   http://sqville.com

   Copyright:
     None

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */
/**
 * Allows decoration of the content value of the before pseudo-element 
 * This mixin is usually used by {@link qx.ui.decoration.Decorator}.
 */
qx.Mixin.define("sqv.ui.decoration.MBeforeContent",
{

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /*
    ---------------------------------------------------------------------------
      PROPERTY: INNER WIDTH
    ---------------------------------------------------------------------------
    */

    /** name of icon */
    beforeContent :
    {
      nullable : true,
      check : "String",
      init : "",
      apply : "_applyBeforeContent"
    }
    
    
  },


  members :
  {

    /**
     * Takes a styles map and adds the outer border styles in place
     * to the given map. This is the needed behavior for
     * {@link qx.ui.decoration.Decorator}.
     *
     * @param styles {Map} A map to add the styles.
     */
    _styleBeforeContent : function(styles)
    {
	  var beforecontent = this.getBeforeContent();
	  if (beforecontent.length > 0) {
		
		// Transform
		var transformpropName = qx.core.Environment.get("css.transform");
		transformpropName = qx.bom.Style.getCssName(transformpropName.name);

	  	
	  	/**
	  	 * See link below for details on font-smoothing
	  	 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth
	  	 */
  		styles["-webkit-font-smoothing"] = "antialiased";
  		styles["-moz-osx-font-smoothing"] = "grayscale";
  		styles[transformpropName] = "translate(0, 0)";
  		styles["text-rendering"] = "auto";
  		styles["display"] = "inline-block";
  		
  		styles[":before"] = 
  		{
  			"content" : beforecontent
		};
	  	
	  }
    },


    _applyBeforeContent : function()
    {
      if (qx.core.Environment.get("qx.debug"))
      {
        if (this._isInitialized()) {
          throw new Error("This decorator is already in-use. Modification is not possible anymore!");
        }
      }
    }
  }
});
