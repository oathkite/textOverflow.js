	$.fn.textOverflow = function() {
		return this.each(function() {
			var self = $(this);
			var text = $(this).text();
			var maxHeight = $(this).css('max-height').replace(/[^-\d\.]/g, '');
			
			self.css('max-height', maxHeight + 1);
			
			while (self.height() > maxHeight) {
				text = text.substr(0, text.length - 1);
				self.text(text + '...');
			}
		});
	};