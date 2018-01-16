/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "UK Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/UK-Holidays.ics"
					}
				]
			}
		},
		//{
			//module: "compliments",
			//position: "lower_third"
		//},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Cheddar",
				locationID: "2653281",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "51066ee34801b02dd190929a963f35d1"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Cheddar",
				locationID: "2653281",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "51066ee34801b02dd190929a963f35d1"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "BBC",
						url: "http://feeds.bbci.co.uk/news/rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
  module: 'MMM-MyCommute',
  position: 'lower_third',
  config: {
    apikey: 'AIzaSyC_dkNUTgwmzPNUiiV13bc2qhvuFNW3tQA',
    origin: '3 Glebelands Close, Cheddar, BS27 3XP',
    startTime: '00:00',
    endTime: '23:59',
    hideDays: [0,6],
    travelTimeFormat: 'h[h] m[m]',
    //showSummary: true,
    //colorCodeTravelTime: true,
    destinations: [
      {
        destination: 'University Centre Somerset, Wellington Rd, Taunton, TA1 5AX',
        label: 'Drive to University Centre Somerset',
        color: '#82E5AA'
      },
      {
        destination: 'Cheddar Library, Union Street, Cheddar',
        label: 'Walk to Cheddar Library',
        mode: 'walking',
        color: '#E58282'
      },
      {
        destination: 'The Roman Baths, Stall St, Bath, BA1 1LZ',
        label: 'Drive to Work',
        color: '#8D82E5'
      },
      {
        destination: 'The Railway Inn, Station Rd, Sandford, Winscombe, BS25 5RA',
        label: 'Cycle Ride to Pub',
        mode: 'bicycling',
        color: '#E582D4'
      }
    ]
  }
}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
