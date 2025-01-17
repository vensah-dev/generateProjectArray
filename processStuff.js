function processInput() {

    let inputItems = document.getElementsByClassName("input");

    let inputs = []
    
    for (let i = 0; i < inputItems.length; i++) {
        inputs.push(inputItems[i].value)
    }


    //tags
    let tagInputs = document.getElementsByClassName("tag");

    let possibleTags = [
        {
            title: 'SAP',
            content: 
        `
        {
            title: "SAP",
            color: "rgba(250, 150, 50, 0.3)",
        },
        `
        },
        {
            title: 'Competition',
            content: 
        `
        {
            title: "Competition",
            color: "rgba(143, 255, 195, 0.3)",
        },
        `
        },
        {
            title: 'Passion Project',
            content: 
        `
        {
            title: "Passion Project",
            color: "rgba(216, 178, 255, 0.3)",
        },
        `
        },
    ]

    let tag =``

    for (let i = 0; i < tagInputs.length; i++){
        let chosenTag = possibleTags.find((p) => p.title === tagInputs[i].value)
        if(chosenTag){
            tag += chosenTag.content

        }
    }

    //links
    let linkInputContainers = document.getElementsByClassName("linkInputContainer");

    let links = ``

    for (let i = 0; i < linkInputContainers.length; i++) {
        let select = linkInputContainers[i].children[0]
        let textarea = linkInputContainers[i].children[1]
        let stringy = `
        {
            content: ("${select.value}"),
            url: "${textarea.value}"
        },
        `

        links += stringy
    }


    //highlights
    let highlight = `
    `

    for (let i = 0; i < parseInt(inputs[7]); i++) {
        highlight += `
        {
            image: "highlight-${i + 1}.png"
        },
        `
    }


    let text = `
{
    kat: "${inputs[0]}",
    year: "${inputs[4]}",
    icon: "/images/projects/${inputs[0]}/icon.png",

    //project details
    title: "${inputs[1]}",
    description: \`${inputs[2]}\`,
    showDescription: ${inputs[3]},

    //images
    image: "/images/projects/${inputs[0]}/thumbnail.png",
    fullPoster: "/images/projects/${inputs[0]}/full-poster.png",

    //featured project stuff
    banner: "/images/projects/${inputs[0]}/banner",
    logo: "/images/projects/${inputs[0]}/logo.png",

    links: [
${links}
    ],

    highlights: [
${highlight}
    ],
    mobileHighlights: ${inputs[5]},

    tags: [
${tag}
    ],

    navbarColor: "${inputs[6]}"

}
    `


    // console.log(text)

    document.getElementById("output").innerHTML = text;

}

function addTag(){
    let tagsDIV = document.getElementById("tags");

    var listItem = document.createElement('select');
    listItem.setAttribute('class', "tag")
    listItem.innerHTML = '<option value="SAP">SAP</option>  <option value="Competition">Competition</option>  <option value="Passion Project">Passion Project</option>'

    tagsDIV.appendChild(listItem);

}

function addLink() {
    let linksDIV = document.getElementById("links");

    var container = document.createElement('div');
    container.setAttribute("class", "linkInputContainer")
    container.style = "display: flex; flex-direction: column;"
    container.innerHTML = '<select class="linkIcon"> <option value="GitHub">GitHub</option>  <option value="Google Drive">Google Drive</option>  <option value="App Store">App Store</option> </select>'
    container.innerHTML += '<textarea class="input" class="linkInput" rows="1" cols="15" placeholder="Link"></textarea>'

    linksDIV.appendChild(container);

}

