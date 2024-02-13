function toggleModel() {
  const html = document.documentElement

  // ativa ou desativa o modo light/mode
  html.classList.toggle("light")

  // pegar tag da imagem (src)
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    // fazer alteração da nametag da imagem ao ativar modo light
    img.setAttribute("alt", "sung-jin-woo-light")
  } else {
    //se tiver dark mode, manter a imagem original
    img.setAttribute("src", "./assets/avatar-darkmode.png")
    // fazer alteração da nametag da imagem ao ativar modo dark
    img.setAttribute("alt", "sung-jin-woo-dark")
  }
}
