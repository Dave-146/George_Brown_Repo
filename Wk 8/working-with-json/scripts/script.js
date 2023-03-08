async function exampleJSON(){
    const requestPATH ="./json/example.json";
    const request = new Request(requestPATH);
    const response = await fetch(request);
    console.log(response);
}

exampleJSON();