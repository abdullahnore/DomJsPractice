var form=document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter = document.getElementById('SearchFilter');


//form submit event
form.addEventListener('submit',addItem);
// delete event 
itemList.addEventListener('click',removeItem);
//filter event 
//keyup is key is released
filter.addEventListener('keyup',filterItems);
//add item
function addItem(e)
{
  e.preventDefault();
  //Get input value
  var newItem = document.getElementById('inputItem').value;

  

  
    if( newItem==0)
    {
       alert('empty item added');
    } else {
  
  // create new li element 

  var li = document.createElement('li');
  //ADD CLASS
  li.className='list-group-item';
  //add text node with input  value ;
  var textNode=document.createTextNode(newItem);//creating text node
  li.appendChild(textNode);//appending the text to li
  //Create Delete Button
   var dbutton = document.createElement('button');
   dbutton.className='btn btn-danger btn-sm float-right delete' // delete will be used as ref class
   //append  text node 
   dtext= document.createTextNode('X');//creating text node
   dbutton.appendChild(dtext);
   li.appendChild(dbutton);//append button to li

  itemList.appendChild(li);// appending li to ul
    }

}
//function remove item
function removeItem(e)
{
  e.preventDefault();
  if(e.target.classList.contains('delete'))
  {
    if(confirm('Are You Sure ?'))
    {
       var li = e.target.parentElement;
       itemList.removeChild(li);
    }
  }

}
function filterItems(e)
{
  e.preventDefault();
  //converts text to lowercase
  var ftext = e.target.value.toLowerCase();
  //get list of elements
  
var items = itemList.getElementsByTagName('li');
  //convert to an array
  Array.from(items).forEach(function 
    (item)
    {
      var itemName = item.firstChild.textContent;// if first child is not used all the elements will be shown
      if (itemName.toLowerCase().indexOf(ftext) !=-1)
      {
        item.style.display ='block';
      }else
      {
        item.style.display ='none';
      }
        }
    )


}