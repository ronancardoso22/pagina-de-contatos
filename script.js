function toggleMode () {

    const html = document.documentElement


    html.classList.toggle('light')
 //   if(html.classList.contains('light')) {
 //       html.classList.remove('light')
 //   } else{
 //       html.classList.add('light')
 //   }

       

        // pegar a tag img 

        const img = document.querySelector("#profile img")
       
        // substituir a imagem do perfil

        if(html.classList.contains('light')) {
             // se tiver light mode adicionar perfil light
                img.setAttribute('src','./assets/profileLight.png')

         } else {

             img.setAttribute('src','./assets/profile.png')
         }
}