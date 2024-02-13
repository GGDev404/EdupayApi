const crearError = function (nombreDelEror) {
    return class ErroresDeNegocio extends Error {
        constructor (mesagge) {
            super(mesagge)
            this.name = nombreDelEror
        }
    }
}

export const ErrorDeconexion = crearError("ErrorDeconexion")
export const ErrorAlObtenerDatos = crearError("ErrorAlObtenerDatos")
export const ErrorAlEditarObjeto = crearError("ErrorAlEditarObjeto")
export const ErrorDeTipo = crearError("ErrorDeTipo")