/**
 * 
 */
var UI = {
	'isDataModified':false,
	dataModified:function()
	{
		// only do this once
		if( this.isDataModified ) {
			return;
		}
		
		this.isDataModified = true;
		
		// add the confirm message
		$(window).bind(
				'beforeunload',
				function() {
				  return "Vous avez fait des modifications, êtes-vous sûr \nde vouloir partir de cette page sans sauvegarder?";
				}
		);
	},
	savingData:function()
	{
		$(window).unbind('beforeunload');
	}
};

