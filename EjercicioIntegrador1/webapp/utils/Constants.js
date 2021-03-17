sap.ui.define([
],
    function (Controller) {
        return {
            models: {
                i18n: "i18n",
                i18n_es: "i18n_es",
                i18n_en: "i18n_en",

                OMODELPRODUCTOS: {
                    producto: "/producto",
                    proveedor: "/proveedor",
                    tamaño: "/tamaño",
                    peso: "/peso",
                    valor: "/valor"

                }

            },
            ids: {
                FRAGMENTS: {
                    dialogBotonIr: " dialogBotonIr",
                    
                }

            },
            routes: {
                main: "Main",
                FRAGMENTS: {
                    dialogBotonIr: "EjercicioIntegrador1.EjercicioIntegrador1.fragments.DialogBotonIr",
                    
                },
                JSON: {
                    productos: "Productos.json",
                    infoIngresada : "InfoIngresada.json",
                    itemDetails: "ItemDetails.json"
                }
            },


        };

    }, true);