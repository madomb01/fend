const apiBaseUrl = "https://api.meaningcloud.com/sentiment-2.1";
const api_key = process.env.API_KEY;
import {
  checkForName
} from './nameChecker'
import {
  validURL
} from './urlChecker'
const getSentimentAnalysis = async (userURL) => {
  const res = await fetch(`${apiBaseURL}?key=${api_key}&lang=en&url=${userURL}`);
  try {
    const data = await res.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
// Setup a POST route where you'll call getSentimentAnalysis method
const postResults = async (url = "http://localhost:8080/inputfield", data = {}) => {
  console.log("::: Form Submitted :::", data);
  console.log(JSON.stringify({
    'url': url
  }));
  const response = await fetch("http://localhost:8080/inputfield", {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      'url': url
    })
  });

  try {
    console.log(response);
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

function handleSubmit(event) {
  event.preventDefault()
  // check what text was put into the form field
  let formText = document.getElementById('name').value
  console.log(formText)
  let valid = validURL(formText)
  if (!valid) {
    alert("Please enter valid URL")
  } else {
    postResults(formText)
      .then(res => {
        document.getElementById('score_tag').innerHTML = `score_tag: ${res.score_tag}`;
        document.getElementById('model').innerHTML = `Model: ${res.model}`;
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
      })
  }
}

export {
  handleSubmit
}
