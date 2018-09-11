function createNode(element)
{
  return document.createElement(element);
}

function append(parent, element) 
{
  return parent.appendChild(element);
}

function getIphones() 
{
  // use the fetch API to load iphones.json
  // after this has loaded call the filterIphones() function below to filter the results

  var ul = document.getElementById('results');
  var url = New Request('https://tristamstone.github.io/iphones.json');

  var iphones = fetch(url)
  .then(function(response)
  { 
    return response.json(); 
  })
  .then(function(data) 
  {
    let iphones = data.results;


// Put your filtering in here
  var filteredIphones = iphones.filter(iphone => iphone.dob.age < 50);
  


    return filteredIphones.map(function(iphone) 
    {
      let li           = createNode('li'),
      iphoneID       = createNode('span'),
      iphoneName     = createNode('span');
      iphoneColour   = createNode('span');
      iphoneCapacity = createNode('span');
      iphonePrice    = createNode('span');

      iphoneID.innerHTML       = `<strong>${iphone.dob.age}<strong>. `;
      iphoneName.innerHTML     = `${iphone.name.first} `;
      iphoneColour.innerHTML   = `${iphone.name.last} `;
      iphoneCapacity.innerHTML = `${iphone.location.postcode} `;
      iphonePrice.innerHTML    = "$" + `${iphone.dob.age}`;

      append(li, iphoneID);
      append(li, iphoneName);
      append(li, iphoneColour);
      append(li, iphoneCapacity);
      append(li, iphonePrice);
      append(ul, li);
    })
  })
  .catch(function(error) 
  {
    console.log(JSON.stringify(error));
  });  
}

function filterIphones(iphones, searchTerm) 
{
  const filteredIphones = iphones.filter(function(iphone) 
  { 
    // filter the iphone
  }) 

  displayFilteredIphones(filteredIphones)
}

function displayFilteredIphones(iphones) 
{
  // take a list of filtered iphones and output them to the <div id="results"></div> in the browser

  var ul = document.getElementById('results');

  for (iphone in iphones)
  {
    let li         = createNode('li'),
    iphoneID       = createNode('span'),
    iphoneName     = createNode('span');
    iphoneColour   = createNode('span');
    iphoneCapacity = createNode('span');
    iphonePrice    = createNode('span');

    iphoneID.innerHTML       = `<strong>${iphone.dob.age}<strong>. `;
    iphoneName.innerHTML     = `${iphone.name.first} `;
    iphoneColour.innerHTML   = `${iphone.name.last} `;
    iphoneCapacity.innerHTML = `${iphone.location.postcode} `;
    iphonePrice.innerHTML    = "$" + `${iphone.dob.age}`;

    append(li, iphoneID);
    append(li, iphoneName);
    append(li, iphoneColour);
    append(li, iphoneCapacity);
    append(li, iphonePrice);
    append(ul, li);
  }
}





