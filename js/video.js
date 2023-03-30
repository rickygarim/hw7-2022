var video = document.getElementsByClassName("video");

window.addEventListener("load", function () {
	console.log("Good job opening up the window")
	video = this.document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function () {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Play video");
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Paused Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow down Video");
	video.playbackRate -= 0.1;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed up Video", video.playbackRate);
	video.playbackRate += 0.1;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Forward 10 seconds");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Restarted Video");
	}
	else {
		video.currentTime += 10;
		console.log("Video current time is", video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
		video.muted = false;
	}
	else {
		document.getElementById("mute").innerHTML = "Unmute";  
		console.log("Muted");
		video.muted = true;
	}
});

document.querySelector("#slider").addEventListener("change", function () {
	var slider = document.querySelector("#slider").value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current value is", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
	document.querySelector(".video").className += " oldSchool";
});

document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector(".video").className = "video";
});
