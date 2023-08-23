window.sr = ScrollReveal({ reset: true})

sr.reveal('.buttongeneral',{duration:3000});

sr.reveal('.effect',{duration:2000});

sr.reveal('.container2-explore',{duration:4000});

sr.reveal('.artist',{duration:3000});

const artists = document.querySelectorAll('.artist');

artists.forEach(artist => {
    const image = artist.querySelector('img');
    const container = artist;

    container.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const offsetX = (mouseX - container.getBoundingClientRect().left) / container.offsetWidth - 0.5;
        const offsetY = (mouseY - container.getBoundingClientRect().top) / container.offsetHeight - 0.5;

        const maxRotate = 20; // ajuste a intensidade da rotação aqui

        image.style.transform = `perspective(500px) rotateX(${maxRotate * offsetY}deg) rotateY(${maxRotate * offsetX}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        image.style.transform = 'translate(0%, 0%) perspective(0) rotateX(0) rotateY(0)';
    });
});

const images = document.querySelectorAll('.img, .img2'); 
const windowHeight = window.innerHeight;

function handleScroll() {
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const scrollPercent = ((window.scrollY + windowHeight) - rect.top) / (windowHeight + rect.height) * 100;
        let imagePosition = 100 - scrollPercent; // Faz a imagem entrar da direita para a esquerda

        // Impede que a imagem continue se movendo após atingir os limites
        if (imagePosition < 0) {
            imagePosition = 0;
        } else if (imagePosition > 100) {
            imagePosition = 100;
        }

        image.style.left = `${imagePosition}%`;
    });
}

window.addEventListener('scroll', handleScroll);
