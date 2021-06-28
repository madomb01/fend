This project uses the Sentiment Analysis feature of MeaningCloud. To analyze a website:

Before running the program, make sure to run the following in the command prompt:

npm install
npm install --save-dev mini-css-extract-plugin
npm install --save-dev jest
npm install dotenv
npm run build-dev
npm run build-prod

as well as obtaining your own MeaningCloud API key and creating a .env file containing your key in the format of API_KEY=XXXXXX

To analyze a website/article, simply copy and paste the website into the "Name" field and press the "Submit" button. Results may take a moment to appear, so please be patient.

Results will show in the following order: score_tag, Model, Agreement, Subjectivity, Confidence, and Irony

This project uses Webpack, Plugins, and the MeaningCloud API. Users will have to create their own MeaningCloud API Key and save it as a .env file type.


Code references:
https://knowledge.udacity.com/questions/612607
https://github.com/udacity/fend/tree/refresh-2019
