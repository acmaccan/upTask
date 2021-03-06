//Importa Sweet Alert 2 y Axios para la acción de eliminar proyecto
import Swal from 'sweetalert2';
import axios from 'axios';

//Eliminar proyecto
const btnEliminar = document.querySelector('#eliminar-proyecto');

if(btnEliminar){
  btnEliminar.addEventListener('click', (e) => {
      const urlProyecto = e.target.dataset.proyectoUrl;

      Swal.fire({
          title: 'Deseas borrar este proyecto?',
          text: "No podrás recuperarlo",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, borrar',
          cancelButtonText: 'No, cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Enviar petición a axios
            const url = `${location.origin}/proyectos/${urlProyecto}`;
            axios.delete(url, {params: {urlProyecto}})
                .then(function(respuesta){
                    console.log(respuesta)

                        Swal.fire(
                            'Proyecto eliminado',
                            respuesta.data,
                            'success'
                        );
                        // Redireccionar al inicio
                        setTimeout(() => {
                            window.location.href = '/'
                        }, 3000);    
                })
                .catch(() => {
                    Swal.fire({
                        type: 'error',
                        title: 'Hubo un error',
                        text: 'No se pudo eliminar el proyecto'
                    })
                })
            }
        })
    })
}