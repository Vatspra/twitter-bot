 //console.log("bot is running");

 var twit = require('twit');

 var config = require('./config');//Authentication Key 

 var T = new twit(config);

 var stream = T.stream('user');

 stream.on('tweet',twt);//mentioned in any twit

 function twt(event){

 	var replyto = event.in_reply_to_screen_name;

 	var from = event.user.screen_name;

 	var toStaus = event.in_reply_to_status_id;

 	var status_id = event.id_str;
 	//var funFact = "i am going to tell some fun fact about you";
 	var name = event.user.name;

 	var id_name = event.user.screen_name;

 	var noOfTwits = event.user.statuses_count;

 	var noOffollower = event.user.followers_count;

 	var follow = event.user.friends_count;

 	var favorited = event.user.favourites_count;
 	//var createdAccont = event.user.created_at
 	var txt = ["so","very","very-very"];

 	var random =Math.floor(Math.random()*3);

 	var rand =Math.floor(Math.random()*100);

 	if(replyto =="a2ztwit_me"){

 	var tweetx = {toStaus : status_id,

 		status:'@' +from +"," +' thanks '+txt[random]+'much' +' budyy i am going to tell some fun fact about you first enjoy this random no. ' +rand+ '.'};
 	T.post('statuses/update',tweetx,tweeted);}

 	function tweeted(err,data,response){

 		if(err){

 			console.log("error errror");
 		}
 		else{

 			console.log("success");
 		}
 		setTimeout(tweetAgain,3000);

 	}
 	
 	function tweetAgain(){

 		if(replyto =="a2ztwit_me"){

 			var rand =Math.floor(Math.random()*100);

 			var statusess =" your name is " +name+
 			" id: "+id_name+" total tweets: " +noOfTwits+','+
 			" total follower " +noOffollower+','+" you followed: "+follow+
 			" user " +" you liked: "+favorited+" twits " ;

 			console.log(statusess);
 			var tweety = {toStaus : status_id,status:'@'+from+' ,'+rand+statusess};
 			T.post('statuses/update',tweety,tweeted);

 			function tweeted(err,data,response){

 				if(err){
 					console.log("erro error");

 				}
 				else{
 					console.log("success");
 				}
 			}
 		}
 	}
 }
 var stream = T.stream('user');


 stream.on('favorite',fav);

 function fav(eventMsg) {


 	var random = Math.floor(Math.random()*3);

 	var word = ["very","so","very-very"];

 	var random_word = word[random];

 	var name = eventMsg.source.name;

 	var screename = eventMsg.source.screen_name;

 	var rand = Math.floor(Math.random()*100);

 	tweetIt('@' + screename +  ' Thank '+random_word+' much for favoriting' +rand+'.');

 	console.log(screename+'favorited your twit');

 }
 stream.on('unfavorite',unfav);


 function unfav(eventMsg){

 	var rand = Math.floor(Math.random()*100);

 	var name = eventMsg.source.name;

 	var screename = eventMsg.source.screen_name;

 	tweetIt('@'+screename+" hello buddy,It seems you have unliked my twit "+rand+'.');

 	console.log(screename+'un-favorited your twit');
 }
 stream.on('follow',followed);

 console.log("in follow stream");

 function followed(eventMsg){

 	var rand = Math.floor(Math.random()*100);
 	
 	var name = eventMsg.source.name;

 	var screename = eventMsg.source.screen_name;

 	tweetIt('@' + screename +  ' Thank much for following'+rand+'.');
 }

function tweetIt(txt){

 	var tweet ={status : txt};

 	T.post('statuses/update',tweet,tweetedx);
 
 	function tweetedx(err,data,response){

 		if(err){

 			console.log("error detected");
 		}
 		else{
 			
 			console.log("success");
 		}
 	}
 }
 

 


 