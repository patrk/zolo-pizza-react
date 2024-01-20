const getTypeFromId = (id) => {
    switch(id){
        case 1:
            return "Pizza"
        case 2:
            return "Pizza Bianca"
        case 3: 
            return "Pizza Speciale"
    }
}

export default getTypeFromId