<a href="https://chathn.vercel.app">
  <img alt="Chat and get the weather using natural language." src="/app/opengraph-image.png">
  <h1 align="center">ChatWeather</h1>
</a>

<p align="center">
  Chat and get the weather using natural language. Built with OpenAI Functions, OpenWeather, and the Vercel AI SDK. 
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#setting-up-locally"><strong>Setting Up Locally</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#license"><strong>License</strong></a>
</p>
<br/>

## Introduction

Test weather is an open-source AI chatbot that uses [OpenAI Functions](https://platform.openai.com/docs/guides/gpt/function-calling) and the [Vercel AI SDK](https://sdk.vercel.ai/docs) to interact with the [OpenWeather API](https://openweathermap.org/) with natural language.

based off of this example by steven-tey: 
https://github.com/steven-tey/chathn/assets/28986134/9c0ad554-f4e5-4e98-8771-5999ddf79235

## Setting Up Locally

To set up ChatWeather locally, you'll need to clone the repository and set up the following environment variables:

- `OPENAI_API_KEY` – your OpenAI API key (you can get one [here](https://platform.openai.com/account/api-keys))
- `OPENWEATHER_API_KEY` - your OpenWeather API key (you can get one [here](https://openweathermap.org/))

## Tech Stack

ChatWeather is built on the following stack:

- [Next.js](https://nextjs.org/) – framework
- [OpenAI Functions](https://platform.openai.com/docs/guides/gpt/function-calling) - AI completions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI streaming library
- [Vercel](https://vercel.com) – deployments
- [TailwindCSS](https://tailwindcss.com/) – styles

## Author

- Debbie Ly ([@deb_i_deb](https://twitter.com/deb_i_deb))

## License

Licensed under the [MIT license](https://github.com/debbly/chatweather/blob/main/LICENSE.md).
