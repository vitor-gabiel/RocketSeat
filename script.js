function MudarTema() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Gaara desenhado em preto e branco para foto de perfi."
    )
  } else {
    img.setAttribute("src", "./assets/Gaara.jpg")
    img.setAttribute("alt", "Imagem do Gaara segurando uma bandana de sua aldeia")
  }
}