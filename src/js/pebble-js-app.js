Pebble.addEventListener("ready",
    function(e) {
        console.log("Hello world! - Sent from your javascript application.");
    }
);
Pebble.addEventListener("showConfiguration", function() {
		console.log("showConfiguration event");
		Pebble.openURL("http://www.realvnc.com");
	}
);
