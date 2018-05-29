

Weather
How it works.
1.Weather works on ajax Api request, sent in the for() loop, the iterator lengh is set manually and correspondents the amount of days to get weather. Api Url uses cnt to set amount of days.
2.There are 2 similar actions: one runs on load with default city, the second runs on click for a specific city.
3.Date for weather is gotten from Ajax request(data.list[i].dt), which is in Unix., convert to normal by {var date = new Date(data.list[i].dt * 1000);}.