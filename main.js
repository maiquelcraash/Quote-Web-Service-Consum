/**
 * Created by maiquel on 08/08/16.
 */

(function () {
	"use strict";

	var quoteHost = "https://andruxnet-random-famous-quotes.p.mashape.com";
	var backgroundClasses = ["red", "green", "blue", "yellow", "pink", "orange", "salmon"];
	var currentClassIndex = 0;
	var currentQuote;

	function Quote(text, author) {
		this.text = text;
		this.author = author;
	}

	$(document).ready(function () {

		getQuote();

		$("#new-quote").click(getQuote);
		$("#tweet-btn").click( function () {
			var tweet = encodeURIComponent(currentQuote.text) + " -- " + encodeURIComponent(currentQuote.author);


			var win = window.open('https://twitter.com/intent/tweet?text=' + tweet, '_blank');
		} );
	});

	function getQuote() {

		$.ajax({
			url: quoteHost,
			type: 'GET',
			dataType: 'json',
			success: setNewQuoteContent,
			error: function () {
				console.log('Failed to get Quote!');
			},
			beforeSend: setHeader
		});

		// $.getJSON(quoteHost, setNewQuoteContent);
		// $.ajaxSet({ cache: false });
	}

	function setHeader(xhr) {
		xhr.setRequestHeader('X-Mashape-Key', 'fIC4C3rGVVmshkkJiXMrWAre9v4Jp1zmdJUjsnqUUazYcvHUN8');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.setRequestHeader('Accept', 'application/json');
	}

	function setNewQuoteContent(data) {
		console.log(data);
		var quote = new Quote(data.quote, data.author);
		currentQuote = quote;

		$(".quote").animate(
			{
				opacity: 0
			}
			, 400
			, function () {
				$(".quote p").html(quote.text);
				$(".quote footer").html(quote.author);
			});
		$(".quote").animate(
			{
				opacity: 1
			}
			, 400);

		var newIndex = currentClassIndex + 1;
		if (currentClassIndex === backgroundClasses.length -1) {
			newIndex = 0;
		}

		$('body, .buttons').switchClass(backgroundClasses[currentClassIndex], backgroundClasses[newIndex], 1000);

		currentClassIndex = newIndex;

	}
}());