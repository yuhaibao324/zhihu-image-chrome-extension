//操作document
let div_str = '<div class="zhihu-image">\n' +
    '            <div class="zhihu-image-inner"></div>\n' +
    '        </div>'

let node = document.createElement("div")
let img = document.createElement("img")
img.src = chrome.extension.getURL("img/ic_launcher.png");
img.alt = "zhihu"
img.title = "zhihu"
img.classList = "zhihu"
img.addEventListener("click", () => {
    // 点击事件
    console.log("click")
    loadImg()
})
node.appendChild(img)
document.body.appendChild(node)


let imageNode = document.createElement("div")
imageNode.innerHTML = div_str
imageNode.getElementsByClassName("zhihu-image")[0].hidden = true
document.body.appendChild(imageNode)


const loadImg = () => {
    let node = document.getElementsByClassName("zhihu-image-inner")[0]
    let nodeHidden = document.getElementsByClassName("zhihu-image")[0]
    console.log(node.hidden)
    if (nodeHidden.hidden === true) {
        nodeHidden.hidden = false
        console.log(node)
        images = document.querySelectorAll("span > figure > span > div")
        console.log(images)
        for(i = 0; i < images.length; i++) {
            let img = document.createElement("img")
            img.src = images[i].dataset.src
            img.className = "image"
            node.appendChild(img)
        }
    } else {
        nodeHidden.hidden = true

    }
}