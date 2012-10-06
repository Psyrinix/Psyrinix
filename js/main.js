function animateUp() {
			
		jQuery('.island').animate({
			top: 0
		}, 1700, function() {
			animateDown();
		});
		
		jQuery('.islandShadow').animate({
			opacity: 0.7
		}, 1700);
		
			
	}
	
	function animateDown() {
		
		jQuery('.island').animate({
			top: 10
		}, 1700, function() {
			animateUp();
		});
		
		jQuery('.islandShadow').animate({
			opacity: 1.0
		}, 1700);
		
	}
	
	jQuery(document).ready(function() {
		
		animateDown();
		
			
		});
