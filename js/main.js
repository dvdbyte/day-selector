document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
      if (day.toLowerCase() == "monday" || day.toLowerCase() == "tuesday" || day.toLowerCase() == "thursday"){
        document.getElementById('placeToSee').innerHTML = "Ise Yaa!"
      }
      else if (day.toLowerCase() == "wednesday"){
        document.getElementById('placeToSee').innerHTML = "It's Mid-week!"
      }
      else if (day.toLowerCase() == 'friday'){
        document.getElementById('placeToSee').innerHTML = "Yeah, Thank God.. It's Friday"
      }
      else if (day.toLowerCase() == 'saturday'){
        document.getElementById('placeToSee').innerHTML = "Party after party"
      }
      else if (day.toLowerCase() == 'sunday'){
        document.getElementById('placeToSee').innerHTML = "Common...Let's Go To Church"
      }
    else {
      document.getElementById('placeToSee').innerHTML = "Enter a valid day of the week"
    }
}
