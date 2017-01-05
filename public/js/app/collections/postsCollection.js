var PostsCollection = Backbone.Collection.extend({
    model: PostItem
});

var ctenophoraPost = new PostItem({
    title: 'Ctenophora',
    description: "Ctenophora (/tᵻˈnɒfərə/; singular ctenophore, /ˈtɛnəfɔːr/ or /ˈtiːnəfɔːr/; " +
    "from the Greek κτείς kteis 'comb' and φέρω pherō 'carry'; " +
    "commonly known as comb jellies) is a phylum of invertebrate animals that live in marine waters worldwide." +
    " Their most distinctive feature is the ‘combs’ – groups of cilia which they use for swimming – " +
    "they are the largest animals that swim by means of cilia. " +
    "Adults of various species range from a few millimeters to 1.5 m (4 ft 11 in) in size. Like cnidarians, " +
    "their bodies consist of a mass of jelly, with one layer of cells on the outside and another lining the internal cavity. " +
    "In ctenophores, these layers are two cells deep, while those in cnidarians are only one cell deep." +
    " Some authors combined ctenophores and cnidarians in one phylum, Coelenterata, " +
    "as both groups rely on water flow through the body cavity for both digestion and respiration. " +
    "Increasing awareness of the differences persuaded more recent authors to classify them as separate phyla.",
    imagePath: 'img/post_images/Ctenophora.jpg',
    postDate: '14 Jan 2003',
    tags: ['animal', 'another-world', 'sea']
});
var bougainvilliaPost = new PostItem({
    title: 'Bougainvillia',
    description: "Bougainvillia is a genus of hydroids in the family Bougainvilliidae in the class Hydrazoa. " +
    "Members of the genus are characterised by having the marginal tentacles of their medusae arranged in " +
    "four bundles. Some species are solitary and others are colonial but all are filter feeders. " +
    "They are found in the Southern Ocean, having a circumpolar distribution, " +
    "but some species also occur in the Northern Hemisphere, possibly travelling there as polyps on the" +
    " hulls of ships.[2]",
    imagePath: 'img/post_images/Bougainvillia.jpg',
    postDate: '11 Mar 2007',
    tags: ['fish', 'another-world','aliens', 'sea']
});
var firstPost = new PostItem({
    title: 'Bougainvillia',
    description: "Bougainvillia is a genus of hydroids in the family Bougainvilliidae in the class Hydrazoa. " +
    "Members of the genus are characterised by having the marginal tentacles of their medusae arranged in " +
    "four bundles. Some species are solitary and others are colonial but all are filter feeders. " +
    "They are found in the Southern Ocean, having a circumpolar distribution, " +
    "but some species also occur in the Northern Hemisphere, possibly travelling there as polyps on the" +
    " hulls of ships.[2]",
    imagePath: 'img/post_images/img1.jpg',
    postDate: '11 Mar 2007',
    tags: ['fish', 'another-world','aliens', 'sea']
});
var secondPost = new PostItem({
    title: 'Bougainvillia',
    description: "Bougainvillia is a genus of hydroids in the family Bougainvilliidae in the class Hydrazoa. " +
    "Members of the genus are characterised by having the marginal tentacles of their medusae arranged in " +
    "four bundles. Some species are solitary and others are colonial but all are filter feeders. " +
    "They are found in the Southern Ocean, having a circumpolar distribution, " +
    "but some species also occur in the Northern Hemisphere, possibly travelling there as polyps on the" +
    " hulls of ships.[2]",
    imagePath: 'img/post_images/img2.jpg',
    postDate: '11 Mar 2007',
    tags: ['fish', 'another-world','aliens', 'sea']
});
var thirdPost = new PostItem({
    title: 'Bougainvillia',
    description: "Bougainvillia is a genus of hydroids in the family Bougainvilliidae in the class Hydrazoa. " +
    "Members of the genus are characterised by having the marginal tentacles of their medusae arranged in " +
    "four bundles. Some species are solitary and others are colonial but all are filter feeders. " +
    "They are found in the Southern Ocean, having a circumpolar distribution, " +
    "but some species also occur in the Northern Hemisphere, possibly travelling there as polyps on the" +
    " hulls of ships.[2]",
    imagePath: 'img/post_images/img3.jpg',
    postDate: '11 Mar 2007',
    tags: ['fish', 'another-world','aliens', 'sea']
});
var fourthPost = new PostItem({
    title: 'Bougainvillia',
    description: "Bougainvillia is a genus of hydroids in the family Bougainvilliidae in the class Hydrazoa. " +
    "Members of the genus are characterised by having the marginal tentacles of their medusae arranged in " +
    "four bundles. Some species are solitary and others are colonial but all are filter feeders. " +
    "They are found in the Southern Ocean, having a circumpolar distribution, " +
    "but some species also occur in the Northern Hemisphere, possibly travelling there as polyps on the" +
    " hulls of ships.[2]",
    imagePath: 'img/post_images/img4.jpg',
    postDate: '11 Mar 2007',
    tags: ['fish', 'another-world','aliens', 'sea']
});

var animalsCollection = new PostsCollection([
    ctenophoraPost,
    bougainvilliaPost,
    firstPost,
    secondPost,
    thirdPost,
    fourthPost
]);
