

Weather
How it works.
1.Weather works on ajax Api request, sent in the for() loop, the iterator lengh is set manually and correspondents the amount of days to get weather. Api Url uses cnt to set amount of days.
2.There are 2 similar actions: one runs on load with default city, the second runs on click for a specific city.
3.Date for weather is gotten from Ajax request(data.list[i].dt), which is in Unix., convert to normal by {var date = new Date(data.list[i].dt * 1000);}.
4. The core function is function myAction(). which runs either onLoad or onClick. This function contain running function getWeather(function (data).
5. Function myAction() contains function  constructAjaxResponse(myIteration, i, formattedDate, data, dayOfWeek);  
It calls the function to construct the whole Div with results, arg[counter which starts from 1, not 0 for Div naming(div1)/, for()iteration value/, Unix data from a]ax, converted to norn(29/05)/, all ajax data response, dayOfWeek(Friday))