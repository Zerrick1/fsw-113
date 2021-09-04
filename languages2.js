const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

var sel = document.getElementById("submit")
sel.addEventListener("click", function(){
    const nodeList = document.querySelectorAll("input")
    const langs = [...nodeList]
    chkLang(langs)
})

function chkLang(langs) {
    let result = false   
    langs.forEach((item) => {
        if (item.value == lang)
        result = true
    }) 
    
    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}