console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
//getting info to send to the server
  const savedKoala = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    ready_to_transfer:$('#readyForTransferIn').val()
  }
  console.log('saving Koala', savedKoala);
    // ajax call to server to get koalas
    $.ajax({
      method: 'POST',
      url: '/koalas',
      data: saveKoala
    }).then(function(response) {
      console.log(response);
      getKoalas()
    }).catch(function(error) {
      console.log('error in song post', error); 
      alert('Error adding song. Please try again later.')       
  });
}

 

