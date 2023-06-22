console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners

  setupClickListeners()
  // load existing koalas on page load
  getKoalas();
  $('#viewKoalas').on('click', '.transfer-btn', transferKoala)
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
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then((response) => {
    let listOfKoalas = response
    console.log('get response is:', response);

    // send to render
    render(listOfKoalas);

  }).catch((err) => {
    console.log('Error getting koala list', err);
    alert('Error getting koalas list')

  });
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}

function transferKoala() {
  console.log('in transferKoala: ', $(this));
  const koalaId = $(this).parent().parent().data('id');
  console.log(`${koalaId}`);
  $.ajax({
    type: 'PUT',
    url: `/koala/${koalaId}`
  }).then((response) => {
    console.log('Koala has been updated in /koala')
    getKoalas();
  }).catch((error) => {
    console.log('Error in UPDATE request: ', error);
    alert('Error in updating a koala')
  })
  
}

function render(listOfKoalas) {
  $('#viewKoalas').empty();
  for(let koala of listOfKoalas) {
    let hiddenButton
    if (koala.ready_for_transfer) {
      hiddenButton = "Already transferred"
    } else {
      hiddenButton = `<button class="transfer-btn">Ready for Transfer</button>`
    }
    let newRow = $(`
      <tr data-id="${koala.id}">
        <td>${koala.name}</td>
        <td>${koala.gender}</td>
        <td>${koala.age}</td>
        <td>${koala.ready_for_transfer}</td>
        <td>${hiddenButton}</td>
        <td>${koala.notes}</td>
        <td><button class="delete-btn">Delete</button></td>
      </tr>
    `);
    console.log(newRow.data('id'));
      $('#viewKoalas').append(newRow)
  }
}
