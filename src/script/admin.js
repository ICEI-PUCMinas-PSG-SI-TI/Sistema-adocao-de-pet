const drawer = document.querySelector("#toggle-btn");

drawer.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
})

const sidebarLinks = document.querySelectorAll(".sidebar-link");
const mainContent = document.querySelector("#main");

// Adiciona evento de clique para cada link da sidebar
sidebarLinks.forEach(link => {
    link.addEventListener("click", async (event) => {
        event.preventDefault(); // Evita recarregar a página
        
        const page = link.getAttribute("data-page"); // Obtém a página a ser carregada

        try {
            const response = await fetch(page); // Busca o conteúdo da página
            if (!response.ok) throw new Error("Erro ao carregar a página");

            const html = await response.text(); // Converte para texto
            mainContent.innerHTML = html; // Insere na main
        } catch (error) {
            mainContent.innerHTML = `<h1>Erro ao carregar a página</h1><p>${error.message}</p>`;
        }
    });
});
