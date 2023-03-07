const input = document.getElementById('word')
const search = document.querySelector('#search')

let text = document.querySelector('div')
let wordExist;



search.addEventListener('click', () => {
    document.getElementById('s_word').textContent = ''
    document.getElementById('pho').textContent = ''
    document.getElementById('pos').textContent = ''    
    document.getElementById('meaning').textContent = ''     
    document.getElementById('pos2').textContent = ''
    document.getElementById('meaning2').textContent = ''
    document.getElementById('pos3').textContent = ''
    document.getElementById('meaning3').textContent = ''
    document.getElementById('pos4').textContent = ''
    document.getElementById('meaning4').textContent = ''
    document.getElementById('syn').textContent = ''
    document.getElementById('ant').textContent = ''
 
    return getMeaning()
})




async function getMeaning() {

    const api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    const data = await api.json();
    
    console.log(api.status)

    if(api.status = 404){
        document.getElementById('s_word').textContent = 'No word found'
    }

    const word = data[0].word;
    const phonics = data[0].phonetic;
    const partOfSpeech = data[0].meanings[0].partOfSpeech;
    const definition = data[0].meanings[0].definitions[0].definition
    const means = data[0].meanings
    

    document.getElementById('s_word').textContent ='Word:- ' + word
    document.getElementById('pho').textContent ='phonetics:- ' + phonics
    
    console.log(data)
    if(means.length>1){
        console.log('greater')
    }else {
        console.log('lesser')
    }

    if (data.length >= 3 && means.length>1) {
        document.getElementById('pos').textContent = partOfSpeech
        document.getElementById('meaning').textContent ='Definition :- ' + definition
        const partOfSpeech2 = data[1].meanings[0].partOfSpeech;
        const definition2 = data[1].meanings[0].definitions[0].definition
        const partOfSpeech2b = data[0].meanings[1].partOfSpeech;
        const definition2b = data[0].meanings[1].definitions[0].definition
        document.getElementById('pos4').textContent = partOfSpeech2b
        document.getElementById('meaning4').textContent ='Definition :- ' + definition2b
        const partOfSpeech3 = data[2].meanings[0].partOfSpeech;
        const definition3 = data[2].meanings[0].definitions[0].definition
        document.getElementById('pos2').textContent = partOfSpeech2
        document.getElementById('meaning2').textContent ='Definition :- ' + definition2
        document.getElementById('pos3').textContent = partOfSpeech3
        document.getElementById('meaning3').textContent ='Definition :- ' + definition3
    }
    if (data.length === 2 && means.length>1) {
        document.getElementById('pos').textContent = partOfSpeech
        document.getElementById('meaning').textContent ='Definition :- ' + definition
        const partOfSpeech2 = data[0].meanings[1].partOfSpeech;
        const definition2 = data[0].meanings[1].definitions[0].definition
        document.getElementById('pos2').textContent = partOfSpeech2
        document.getElementById('meaning2').textContent ='Definition :- ' + definition2
        const partOfSpeech2b = data[1].meanings[0].partOfSpeech;
        const definition2b = data[1].meanings[0].definitions[0].definition
        document.getElementById('pos3').textContent = partOfSpeech2b
        document.getElementById('meaning3').textContent ='Definition :- ' + definition2b
    }else if(data.length === 2 && means.length===1){
        document.getElementById('pos').textContent = partOfSpeech
        document.getElementById('meaning').textContent ='Definition :- ' + definition
        const partOfSpeech2b = data[1].meanings[0].partOfSpeech;
        const definition2b = data[1].meanings[0].definitions[0].definition
        document.getElementById('pos3').textContent = partOfSpeech2b
        document.getElementById('meaning3').textContent ='Definition :- ' + definition2b
    } 
    if (data.length === 1 && means.length>1) {
        document.getElementById('pos').textContent = partOfSpeech
        document.getElementById('meaning').textContent ='Definition :- ' + definition
        const partOfSpeech2 = data[0].meanings[1].partOfSpeech;
        const definition2 = data[0].meanings[1].definitions[0].definition
        document.getElementById('pos2').textContent = partOfSpeech2
        document.getElementById('meaning2').textContent ='Definition :- ' + definition2
    }else{
        document.getElementById('pos').textContent = partOfSpeech
        document.getElementById('meaning').textContent ='Definition :- ' + definition
    }

    const synonyms = data[0].meanings[0].synonyms
    const antonyms = data[0].meanings[0].antonyms
    if(data.length === 1 || data.length ===2 || data.length >= 3){
        for (i = 0; i < synonyms.length; i++) {
            document.getElementById('syn').textContent = 'synonyms :- '  + synonyms[i] + ', '
            // console.log(synonyms[i])
            
        }
     
        for (i = 0; i < antonyms.length; i++) {
            document.getElementById('ant').textContent ='antonyms :- '  + antonyms[i] + ', '
            // console.log(antonyms[i])
        }
    }
    
}



getMeaning()

console.log(typeof(getMeaning()))



// const synonyms2 = data[0].meanings[1].synonyms
//     const antonyms2 = data[0].meanings[1].antonyms

//     for (i = 0; i < synonyms2.length; i++) {
//         document.getElementById('syn').textContent += synonyms2[i] + ', '  
//         console.log(synonyms2[i])
        
//     }
//     for (i = 0; i < antonyms2.length; i++) {
//         document.getElementById('syn').textContent += antonyms2[i] + ', '  
//         console.log(antonyms2[i])
        
//     }


    // document.getElementById('s_word').textContent = word
    // document.getElementById('pho').textContent = phonics
    // document.getElementById('pos').textContent = partOfSpeech
    // document.getElementById('meaning').textContent = definition
    // document.getElementById('pos2').textContent = partOfSpeech2
    // document.getElementById('meaning2').textContent = definition2
    // document.getElementById('pos3').textContent = partOfSpeech3
    // document.getElementById('meaning3').textContent = definition3
    // for (i = 0; i < synonyms.length; i++) {
    //     document.getElementById('syn').textContent = synonyms[i]
    // }
    // for (i = 0; i < antonyms.length; i++) {
    //     document.getElementById('ant').textContent = antonyms[i]
    // }


// console.log(data)
// console.log(data[0].word)
// console.log(phonics)
// console.log(data[0].meanings[0].partOfSpeech)
// console.log(data[0].meanings[0].definitions[0].definition)
// console.log(data[1].meanings[0].partOfSpeech)
// console.log(data[1].meanings[0].definitions[0].definition)
// console.log(data[2].meanings[0].partOfSpeech)
// console.log(data[2].meanings[0].definitions[0].definition)
// console.log(data[0].meanings[0].antonyms)
// console.log(data[0].meanings[0].synonyms)


//
// console.log(word)

// const objCon = {
//     word: data[0].word,
//     phonectics: data[0].phonectic,
//     partOfSpeech: data[0].meanings[0].partOfSpeech,
//     meaning1: data[0].meanings[0].definitions[0].definition,
//     partOfSpeech2: data[0].meanings[2].partOfSpeech,
//     meaning2: data[0].meanings[0].definitions[1].definition,
//     partOfSpeech3: data[0].meanings[2].partOfSpeech,
//     meaning3: data[0].meanings[0].definitions[2].definition
// }

//     example1: data[0].meanings[0].definitions[0].example,
//     example2: data[0].meanings[1].definitions[0].example,

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>





