
document.querySelector('.breakfastbutt').addEventListener('click', showbreakfast)
document.querySelector('.lunchbutt').addEventListener('click', showlunch)
document.querySelector('.dinnerbutt').addEventListener('click', showdinner)
document.querySelector('.dessertbutt').addEventListener('click', showdessert)
document.querySelector('.shakebutt').addEventListener('click', showshake)


function showbreakfast(){
    document.querySelector('.breakfastbutt').classList.toggle('selectbutt')
    document.querySelector('.lunchbutt').classList.remove('selectbutt')
    document.querySelector('.dinnerbutt').classList.remove('selectbutt') 
    document.querySelector('.dessertbutt').classList.remove('selectbutt')
    document.querySelector('.shakebutt').classList.remove('selectbutt')

    document.querySelector('.breakfast').classList.remove('hidden')
    document.querySelector('.lunch').classList.add('hidden')
    document.querySelector('.dinner').classList.add('hidden') 
    document.querySelector('.dessert').classList.add('hidden')
    document.querySelector('.shake').classList.add('hidden')
}

function showlunch(){
    document.querySelector('.breakfastbutt').classList.remove('selectbutt')
    document.querySelector('.lunchbutt').classList.toggle('selectbutt')
    document.querySelector('.dinnerbutt').classList.remove('selectbutt') 
    document.querySelector('.dessertbutt').classList.remove('selectbutt')
    document.querySelector('.shakebutt').classList.remove('selectbutt')

    document.querySelector('.breakfast').classList.add('hidden')
    document.querySelector('.lunch').classList.remove('hidden')
    document.querySelector('.dinner').classList.add('hidden') 
    document.querySelector('.dessert').classList.add('hidden')
    document.querySelector('.shake').classList.add('hidden')
}

function showdinner(){
    document.querySelector('.breakfastbutt').classList.remove('selectbutt')
    document.querySelector('.lunchbutt').classList.remove('selectbutt')
    document.querySelector('.dinnerbutt').classList.toggle('selectbutt') 
    document.querySelector('.dessertbutt').classList.remove('selectbutt')
    document.querySelector('.shakebutt').classList.remove('selectbutt')

    document.querySelector('.breakfast').classList.add('hidden')
    document.querySelector('.lunch').classList.add('hidden')
    document.querySelector('.dinner').classList.remove('hidden') 
    document.querySelector('.dessert').classList.add('hidden')
    document.querySelector('.shake').classList.add('hidden')
}

function showdessert(){
    document.querySelector('.breakfastbutt').classList.remove('selectbutt')
    document.querySelector('.lunchbutt').classList.remove('selectbutt')
    document.querySelector('.dinnerbutt').classList.remove('selectbutt') 
    document.querySelector('.dessertbutt').classList.toggle('selectbutt')
    document.querySelector('.shakebutt').classList.remove('selectbutt')

    document.querySelector('.breakfast').classList.add('hidden')
    document.querySelector('.lunch').classList.add('hidden')
    document.querySelector('.dinner').classList.add('hidden') 
    document.querySelector('.dessert').classList.remove('hidden')
    document.querySelector('.shake').classList.add('hidden')
}

function showshake(){
    document.querySelector('.breakfastbutt').classList.remove('selectbutt')
    document.querySelector('.lunchbutt').classList.remove('selectbutt')
    document.querySelector('.dinnerbutt').classList.remove('selectbutt') 
    document.querySelector('.dessertbutt').classList.remove('selectbutt')
    document.querySelector('.shakebutt').classList.toggle('selectbutt')

    document.querySelector('.breakfast').classList.add('hidden')
    document.querySelector('.lunch').classList.add('hidden')
    document.querySelector('.dinner').classList.add('hidden') 
    document.querySelector('.dessert').classList.add('hidden')
    document.querySelector('.shake').classList.remove('hidden')
}



