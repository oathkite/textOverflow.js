$.fn.textOverflow = function() {
	return this.each(function() {
		var self = $(this);
		var text = $(this).text();
		var maxHeight = parseInt($(this).css('max-height'));
		
		self.css('max-height', maxHeight + 1);
		
		while (self.height() > maxHeight) {
			text = text.substr(0, text.length - 3);
			self.text(text + '...');
		}
	});
};