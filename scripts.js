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

  const searchToken  = document.getElementById('searchTerm').value;
  const regex        = new RegExp(searchToken,'i');  

  document.getElementById('results').innerHTML = "";
  const ul  = document.getElementById('results');
  const url = new Request('https://tristamstone.github.io/iphones.json');

  var found = false;

  var iphones = fetch(url)
  .then(function(response)
  { 
    return response.json(); 
  })
  .then(function(data)
  {     
    const filteredIphones = data.filter(function(iphone) 
    {  
      if(iphone.color.match(regex))
      {
        found = true;
        return iphone.color.match(regex);
      }
      else if(iphone.capacity.match(regex))
      {
        found = true;
        return iphone.capacity.match(regex);
      }
    });

    if(found == true)
    {
      let list = createNode('ul');
      append(ul, list);

      return filteredIphones.map(function(iphone)
      {
        let li         = createNode('li'),
        //iphoneID       = createNode('span'),
        iphoneName     = createNode('span');
        iphoneColor    = createNode('span');
        iphoneCapacity = createNode('span');
        iphonePrice    = createNode('span');

        //iphoneID.innerHTML       = `${iphone.id}. `;
        //iphoneID.className      += "phoneID";
        iphoneName.innerHTML     = `${iphone.name} `;
        iphoneColor.innerHTML    = `${iphone.color} `;
        iphoneCapacity.innerHTML = `${iphone.capacity} `;
        iphonePrice.innerHTML    = "$" + `${iphone.price}`;
  
        //append(li, iphoneID);
        append(li, iphoneName);
        append(li, iphoneColor);
        append(li, iphoneCapacity);
        append(li, iphonePrice);
        append(list, li);
      })
    }
    else
    {
      document.getElementById('results').innerHTML = "No results found.";
      return false;
    }
  })
  .catch(function(error) 
  {
    console.log(JSON.stringify(error));
  });  
}



