let obj = document.getElementById("output");
let userinput = document.getElementById("userinput");
let button = document.getElementById('button');
let output_hour = document.getElementById("output_hour");
let box = document.getElementById("box");

let status = "";

let good_repsonses = ["Wow! That's really great!", 
	"I wish I was as disiplined as you ;)",
	"You should be proud of yourself"
	]
let ok_responses = ["Hey that's not bad!", "I'm way worse :(","I didn't do my homework for like 5 hours today because I was on Youtube"
	]
	
let bad_responses = ["Oh man you're just like me...",
	"it's okay we're in this together",
	"We're not the only ones that are like this so don't fret too hard"
	]

let tiktok_responses = ["OOOO TikTok", "Congress just passed the bill to ban that...",
	"Blessing in disguise?", 
	"Well yes but no!", "America just doesn't like China having that public influence",
	"Not for a moral reason or anything...",
	"They just want TikTok to be sold to an American company so that they can have it instead!",
	"... America bad momment"
	]

let youtube_responses = ["AYYYYY me to!", "I love Youtube!",
	"I can put the most random 2 and a half hour videos about shit I know nothing about in the background while I code and it's awesome",
	"I love watching video game challenge and speedruns!",
	"Special shoutout to the GOAT Dante Ravioli for his goated Resident Evil speedruns!",
	"I also love me some Pokemon Nuzlokes!",
	"Honestly, my relationship with Youtube was pretty healthy",
	"until Youtube shorts came out...",
	"Now I it'll hypnotise me and my time to do homework will have suddenly become the time to panic about homework!"
	]

let insta_responses = ["Good ol Instagram Reals", "I love these because I share them with people",
	"I love sending these to my brother!",
	"He sends me the funniest shit I've ever seen and I like to think I send him some good ones too",
	"Love sending my girlfriend Golden Retriever videos too",
	"Too bad it the same addictive nature of scroll till you die is present...",
	"The hours just melt away but at least it gets a good laugh out of me most of the time!"
	]

let othersocial_responses = ["Woah you use something else?",
	"I can't think of something else on the top of my head...",
	"Maybe Snapchat but I only really use it to talk to people so I don't spend a lot of time there",
	"Maybe I'm just getting old and behind the treands all them yongins be following"
	]

let sports_response = ["Good for you!", "I wish I was more active",
	"I go through the motions with working out of high motivation followed by a low then followed by a new high",
	"Been in a low since second round of midterms and I already feel the crawl of finals inching on me",
	"I have time to go back to the gym but I don't have the energy right now",
	"I can't stop thinking to myself that if I start now I'll just have to stop in a week because finals are starting up",
	"Definetly need to improve my mental strength...", "Lets just blame social media hehehehe"
	]

let games_response = ["Now we're talking", "I love video games!", "Always have", "Always will",
	"Favorite seriers gotta be", "Resident Evil","The Legend of Zelda", "and Persona",
	"Becoming immersed into another world is a very good way to escape this one if thats what you're looking to do",
	"I'm going to finish Chrono Trigger as my next game", "I got pretty far in but dropped it because I was playing on a DS with an R4 card and my hands got stiff from playing it too much hahaha",
	"I'm gonna emulate it and get it done hopefully after finals", "I would ask you what games you're playing or are looking forwards too but I can't write that much dialogue so just think fondly about it :)"
	]

let music_responses = ["Music is awesome","Whether you play or listen anyone can enjoy it!",
	"Me, I'm a bass player", "I'm okay", "I don't think I currently put in the hours to deserve a title higher than that hahaha", "Back in highscool I played a lot because I was in a band","I miss that", 
	"Playing music with people is a really spercial experience and if you play an instrument I would recommend experiencing it", "As a listener of music I love","Radiohead","The Strokes","Foo Fighters","And way way more",
	"Music is just an awesome hobby because everyones got something to say about it!", "Who doesn't listen to music!"
	]

let otheractive_responses = ["Sorry I didn't pinpoint your hobby",
	"I wish I could code dialogue to suffice your needs hahaha",
	"Well there's a million hobbies out there and I'm glad you've got one you really like!",
	"And if you don't have one I totally get it",
	"For a long time I felt and even now sometimes feel that there isn't anything I'm super passionate about",
	"It's okay to feel that way","I'm pretty happy enjoying the little things for now", "who knows what the future will hold for us!",
	]

button.addEventListener('click', function(event){	
	console.log("pressed");
	console.log(userinput.value);
	got_input_hours(userinput.value);
	button.disabled = true;
});

let final_responses1 = ["TikTok","Youtube","Instagram","Something Random"];
let fav_social = -1;
let final_responses2 = ["Athletics","Music","Gaming", "Something Random"];
let fav_activity = -1;

function got_input_hours(hours){
    if (hours <=1){
    	status = "good";
    	for (let i = 0; i<good_repsonses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("goodstat");
    		newobj.innerText = good_repsonses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       			newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
    }
    else if (hours <=3){
    	status = "ok";
    	for (let i = 0; i<ok_responses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("okstat");
    		newobj.innerText = ok_responses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
          		newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
    }
    else if (hours <=5){
    	status = "me";
    	for (let i = 0; i<bad_responses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("badstat");
    		newobj.innerText = bad_responses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       			newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
    }
    insertQ2();
}

function insertQ2(){
	let newDiv = document.createElement("DIV");
	let newP = document.createElement("P");
	newP.classList.add("stat");
	newP.innerText = "What service do you use the most?"
	let newButton1 = document.createElement("BUTTON");
	let newButton2 = document.createElement("BUTTON");
	let newButton3 = document.createElement("BUTTON");
	let newButton4 = document.createElement("BUTTON");
	newButton1.setAttribute("id", "tiktok");
	newButton2.setAttribute("id", "youtube");
	newButton3.setAttribute("id", "Instagram");
	newButton4.setAttribute("id", "othersocial");
	newDiv.classList.add("userinput");
	newButton1.classList.add("button");
	newButton2.classList.add("button");
	newButton3.classList.add("button");
	newButton4.classList.add("button");

	newButton1.innerText = "TikTok";
	newButton2.innerText = "Youtube";
	newButton3.innerText = "Instagram";
	newButton4.innerText = "Other";
	newDiv.appendChild(newButton1);
	newDiv.appendChild(newButton2);
	newDiv.appendChild(newButton3);
	newDiv.appendChild(newButton4);

	box.appendChild(newP);
	box.appendChild(newDiv);

	let tiktok = document.getElementById("tiktok");
	let youtube = document.getElementById("youtube");
	let insta = document.getElementById("Instagram");
	let othersocial = document.getElementById("othersocial");

	tiktok.addEventListener('click', function(event){
		fav_social = 0;	
		for (let i = 0; i<tiktok_responses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("okstat");
    		newobj.innerText = tiktok_responses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       		    newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
    	tiktok.disabled = true;
    	youtube.disabled = true;
    	insta.disabled = true;
    	othersocial.disabled = true;
    	insertQ3();
	});
	youtube.addEventListener('click', function(event){
		fav_social = 1;
		for (let i = 0; i<youtube_responses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("goodstat");
    		newobj.innerText = youtube_responses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       			newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
		tiktok.disabled = true;
    	youtube.disabled = true;
    	insta.disabled = true;
    	othersocial.disabled = true;
    	insertQ3();
	});
	insta.addEventListener('click', function(event){
		fav_social = 2;
		for (let i = 0; i<insta_responses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("goodstat");
    		newobj.innerText = insta_responses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       			newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
		tiktok.disabled = true;
    	youtube.disabled = true;
    	insta.disabled = true;
    	othersocial.disabled = true;
    	insertQ3();
	});
	othersocial.addEventListener('click', function(event){
		fav_social = 3;
		for (let i = 0; i<othersocial_responses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("badstat");
    		newobj.innerText = othersocial_responses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos","fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       			newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
		tiktok.disabled = true;
    	youtube.disabled = true;
    	insta.disabled = true;
    	othersocial.disabled = true;
    	insertQ3();
	});



}


function insertQ3(){
	let newDiv = document.createElement("DIV");
	let newP = document.createElement("P");
	newP.classList.add("stat");
	newP.innerText = "What sort of activities do you do that keep you away from the constant entertainment of the Internet?"
	let newButton1 = document.createElement("BUTTON");
	let newButton2 = document.createElement("BUTTON");
	let newButton3 = document.createElement("BUTTON");
	let newButton4 = document.createElement("BUTTON");
	newButton1.setAttribute("id", "sports");
	newButton2.setAttribute("id", "music");
	newButton3.setAttribute("id", "videogames");
	newButton4.setAttribute("id", "otheractive");
	newDiv.classList.add("userinput");
	newButton1.classList.add("button");
	newButton2.classList.add("button");
	newButton3.classList.add("button");
	newButton4.classList.add("button");

	newButton1.innerText = "Sports/Workout";
	newButton2.innerText = "Music";
	newButton3.innerText = "Video Games";
	newButton4.innerText = "Other";
	newDiv.appendChild(newButton1);
	newDiv.appendChild(newButton2);
	newDiv.appendChild(newButton3);
	newDiv.appendChild(newButton4);

	box.appendChild(newP);
	box.appendChild(newDiv);

	newButton1.addEventListener('click', function(event){	
		fav_activity = 0;
		for (let i = 0; i<sports_response.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("badstat");
    		newobj.innerText = sports_response[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       		   	newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
    	newButton1.disabled = true;
    	newButton2.disabled = true;
    	newButton3.disabled = true;
    	newButton4.disabled = true;
    	final();
	});
	newButton2.addEventListener('click', function(event){	
		fav_activity=1;
		for (let i = 0; i<music_responses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("goodstat");
    		newobj.innerText = music_responses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       			newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
    	newButton1.disabled = true;
    	newButton2.disabled = true;
    	newButton3.disabled = true;
    	newButton4.disabled = true;
    	final();
	});
	newButton3.addEventListener('click', function(event){
		fav_activity = 2;
		for (let i = 0; i<games_response.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("goodstat");
    		newobj.innerText = games_response[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       			newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
    	newButton1.disabled = true;
    	newButton2.disabled = true;
    	newButton3.disabled = true;
    	newButton4.disabled = true;
    	final();
	});
	newButton4.addEventListener('click', function(event){
		fav_activity=3;	
		for (let i = 0; i<otheractive_responses.length; i++){
    		let newDiv = document.createElement("DIV");
    		let space = document.createElement("DIV");
    		space.classList.add("space");
    		let newobj = document.createElement("P");
    		newobj.classList.add("okstat");
    		newobj.innerText = otheractive_responses[i];

    		if (i%2==0){
    			newDiv.classList.add("textbox");
    			newDiv.setAttribute("data-aos", "fade-right");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    		else if (i%2==1){
       			newDiv.classList.add("textbox2");
       			newDiv.setAttribute("data-aos", "fade-left");
    			newDiv.appendChild(newobj);
    			newDiv.appendChild(space);
    			box.appendChild(newDiv);
    		}
    	}
    	newButton1.disabled = true;
    	newButton2.disabled = true;
    	newButton3.disabled = true;
    	newButton4.disabled = true;
    	final();
	});
}

function final(){
	let newDiv = document.createElement("DIV");
	let newP = document.createElement("P");
	newP.setAttribute("data-aos","fade-up");
	newP.classList.add("stat");
	newP.innerText = "Wow It's been awesome talking with you! I feel like I've learned a lot about you!"
	newP.innerText += "You're an Amazing person whose perfered activity of choice is " + final_responses2[fav_activity]
	+ ".";

	if (status == "good"){
		newP.innerText += "You honestly don't spend that much on " + final_responses1[fav_social] + "! You're just a really cool cat!";
		newP.innerText += "I'll Try my best to be more like you!";

	}
	else if (status == "ok"){
		newP.innerText += "You Definetly spend sometime on " + final_responses1[fav_social] + " but it's not the worst thing ever. Maybe a little less would be good for you but overall you're definetly a cool cat";
		newP.innerText += "Lets both try our best!";
	}
	else if (status =="me"){
		newP.innerText += "You and me both spend too much time on " + final_responses1[fav_social] + ". We definetly gotta log off for a bit and get back to the real world. Don't worry though we're still cool cats..."
		newP.innerText += "Lets both try our best!";

	}
	box.appendChild(newP);
}	

function passedList(list){

}