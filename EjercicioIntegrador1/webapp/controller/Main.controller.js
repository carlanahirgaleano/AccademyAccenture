sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "EjercicioIntegrador1/EjercicioIntegrador1/utils/Constants",
    "sap/ui/model/json/JSONModel",
    "EjercicioIntegrador1/EjercicioIntegrador1/utils/Services",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter",
    "EjercicioIntegrador1/EjercicioIntegrador1/utils/Formatter"

],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Constants, JSONModel, Services, FilterOperator, Filter, Formatter) {
        "use strict";

        return Controller.extend("EjercicioIntegrador1.EjercicioIntegrador1.controller.Main", {
            Format: Formatter,
            onInit: function () {
                this.loadModelProductos();
                this.loadModelInfo();

            },
            loadModelProductos: async function () {
                const oResponseProducto = await Services.getLocalJSON(Constants.routes.JSON.productos)
                const oDataProducto = oResponseProducto[0]
                const oModelProducto = new JSONModel();
                oModelProducto.setData(oDataProducto);
                this.getView().setModel(oModelProducto, "modelProducto")
            },
            loadModelInfo: async function () {
                const oResponseInfo = await Services.getLocalJSON(Constants.routes.JSON.infoIngresada)
                const oDataInfo = oResponseInfo[0]
                const oModelInfo = new JSONModel();
                oModelInfo.setData(oDataInfo);
                this.getView().setModel(oModelInfo, "modelInfo")





            },
            openDialogIr: function () {
                if (!this._oFragment) {
                    this._oFragment = sap.ui.xmlfragment("idInfo", "EjercicioIntegrador1.EjercicioIntegrador1.fragments.DialogBotonIr", this);
                    this.getView().addDependent(this._oFragment);
                }
                this._oFragment.open();
            },
            onCloseDialog: function () {
                this._oFragment.close();
            },
            // onChangeItems:function(oEvent){
            //   var oItem = event.getSource().getSelectedKey();
            //   var path= event.getSource().getSelectedKey().getBindingContext().getPath();
            //   const modelInfo= this.getView().getModel("modelInfo")     
            //     modelInfo.getProperty(path)
            // }
            onSearch: function (oEvent) {
                let aFilters = []
                let sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    let oFilterProducto = new Filter("producto", FilterOperator.Contains, sQuery)
                    aFilters.push(oFilterProducto)
                    let oFilterProveedor = new Filter("proveedor", FilterOperator.Contains, sQuery)
                    aFilters.push(oFilterProveedor)

                    var oFilters = new Filter(aFilters)
                }
                let oTabla = this.getView().byId("TableProducts")
                let oBindingInfo = oTabla.getBinding("items")
                oBindingInfo.filter(oFilters, "Application")

            },

            detailItem: async function (oEvent) {
                const oResponseItem= await Services.getLocalJSON(Constants.routes.JSON.itemDetails)
                const oDataItem = oResponseItem[0]
                const oModelItem = new JSONModel();
                oModelItem.setData(oDataItem);
                this.getView().setModel(oModelItem, "modelItem")

                var oItem = oEvent.getSource();
                var oBindingContext = oItem.getBindingContext("modelItem");
                var oModel = this.getView().getModel("modelItem");
                var oProductoSeleccionado = oModel.getProperty(oBindingContext.getPath());
                 this.openDialogDetail();

            },
            openDialogDetail: function (){
                  if (!this._oFragment) {
                    this._oFragment = sap.ui.xmlfragment("idInfo", "EjercicioIntegrador1.EjercicioIntegrador1.fragments.DialogDetail", this);
                    this.getView().addDependent(this._oFragment);
                }
                this._oFragment.open();
            }

            
        

        });

    });
