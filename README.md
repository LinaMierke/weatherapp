## Weather Project

## General Info

---

Weather app was created as a hometake assigment and a great practice using ReactJS and learning more about the API, callbacks, passong props, using the UseEffect and useState.

[www.weathermoves.com](https://610ffb058e155c00adfb14a6--weathermoves.netlify.app/)

## Back-End API

---

The initial API for this project is API openWeather `https://openweathermap.org/api` there I initially used the doc for Current Weather Data, but then find the Daily Forecast 16 days `https://api.openweathermap.org/data/2.5/forecast?&cnt=7&units=imperial&${usezipparam}&appid=${API_KEY} `

## Installation

---

A little intro about the installation.

```
$ git clone https://github.com/LinaMierke/weatherapp
$ cd weather
$ npm install
$ npm start
```

## npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
Side information: To use the application in a special environment use `http://localhost:3000/` to see the landing page.

## Weather Folder

---

In the folder Weather you will find two different components: Weather.js and Days.js. Those are the main components for my application and where the data is passing and showing.

## Seach Folder

---

The search folder contains the base Search.js where all the information is starting to pass to modify the weather components.

## To Do

- Add the new API and figure out the 7 days. I read this information use could be useful \*[Error Catching](https://reactjs.org/docs/error-boundaries.html)
- Add interactivity to the page with the corresponding image for the weather

## Technologies & Sources

---

A list of technologies used within the project:

- [Netlify](https://app.netlify.com/)
- [Freepik](https://www.freepik.com/psd/banner): Picture source & then modifided by:
- [Photoshop](https://adobecloud.com): Version 9.3
- [Illustrator](https://adobecloud.com): Version 9.3
- [Icons](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react): Used and modifided
- [CSSgradient](https://cssgradient.io/): Gradient

## License

Private License @ 2021
