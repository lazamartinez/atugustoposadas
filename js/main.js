$(document).ready(function () {

    // Configuración de la acción de logout con confirmación
    const btnLogout = $(".btnLogout");
    if (btnLogout.length) {
        btnLogout.on("click", function (e) {
            e.preventDefault();
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Vas a cerrar tu sesión actual.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, cerrar sesión",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirige al enlace de cierre de sesión
                    window.location.href = $(this).attr('pag-redirect');
                }
            });
        });
    }

    // Inicialización del slider (Carrusel)
    const slider = $(".slider");
    if (slider.length) {
        slider.slick({
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            accessibility: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
            ]
        });
    }
});