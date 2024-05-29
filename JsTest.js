let nfts = [];

function mintNFT(artName, artist, creationDate, description) {
   
    let nft = {
        artName: artName,
        artist: artist,
        creationDate: creationDate,
        description: description
    };
    
    nfts.push(nft);
}


function listNFTs() {

    for (let i = 0; i < nfts.length; i++) {
        console.log(`Art Name: ${nfts[i].artName}`);
        console.log(`Artist: ${nfts[i].artist}`);
        console.log(`Creation Date: ${nfts[i].creationDate}`);
        console.log(`Description: ${nfts[i].description}`);
        console.log('----------------------');
    }
}


function getTotalSupply() {
 
    return nfts.length;
}

mintNFT("Sunset Overdrive", "Jane Doe", "2024-05-29", "A beautiful sunset over the mountains.");
mintNFT("Sea to Heaven", "John Smith", "2024-05-30", "A refreshing view of the sea during sunrise.");
mintNFT("Urban Spectrum", "Alice Johnson", "2024-06-01", "A stunning depiction of city lights at night.");
mintNFT("Stary Night", "Arun", "2024-06-07", "A stunning depiction of stars in the clear sky.");


listNFTs();

console.log(`Total Supply: ${getTotalSupply()}`);
