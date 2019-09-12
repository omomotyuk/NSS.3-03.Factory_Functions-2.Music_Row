/*
//
*/
/*
Practice: Music Row
Your job is to sign each of these promising young music stars to the appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old
Jensen Brown is a Pop artist and is 20 years old
Dre Funkz is a Funk artist and is 25 years old
Dusta Grimes is a Rap artist and is 21 years old
Bartholomew Danielson is a Bluegrass artist and is 23 years old
Avilee Dallas is a Country artist and is 19 years old
Austin Kinkaid is a Pop artist and is 22 years old
Loyoncé Branis is a Rap artist and is 27 years old
*/

const newArtist = ( first_name, last_name, age, genre ) => {
    const artist = {
        first_name: first_name,
        last_name: last_name,
        age: age,
        genre: genre
    }
    return artist
}

const artistList = []

artistList[0] = newArtist( "Bruce", "Atikins", 23,"Country" )
artistList[1] = newArtist( "Jensen", "Brown", 20, "Pop" )
artistList[2] = newArtist( "Dre", "Funkz", 25, "Funk" )
artistList[3] = newArtist( "Dusta", "Grimes", 21, "Rap" )
artistList[4] = newArtist( "Bartholomew", "Danielson", 23, "Bluegrass" )
artistList[5] = newArtist( "Avilee", "Dallas", 19, "Country" )
artistList[6] = newArtist( "Austin", "Kinkaid", 22, "Pop" )
artistList[7] = newArtist( "Loyoncé", "Branis", 27, "Rap" )

const JumpStopRecords = [] // works with Funk and Rap artists
const ChattenRecords = [] // works with Country and Bluegrass artists
const PolarRecords = [] // works with Pop artists

artistList.filter( artist => {
    switch ( artist.genre ){
        case 'Bluegrass' : { ChattenRecords.push( artist ) } break
        case 'Country' : { ChattenRecords.push( artist ) } break
        case 'Funk' : { JumpStopRecords.push( artist ) } break
        case 'Pop' : { PolarRecords.push( artist ) } break
        case 'Rap' : { JumpStopRecords.push( artist ) } break
        default : {}
    } 
})

console.log( "ChattenRecords",ChattenRecords )
console.log( "JumpStopRecords",JumpStopRecords )
console.log( "PolarRecords",PolarRecords )
