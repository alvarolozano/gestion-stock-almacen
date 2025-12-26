import {expect, test} from "vitest";
import {generarMockAlmacen} from "../../mocks/almacen.mock";
import {generarPedidoCustom} from "../../mocks/pedido.mock";
import {repartirUnidadesPedido} from "../stock-processor";
import {TipoEstadoStock} from "../../types";


const ID_PRODUCTO_PRUEBA = "PRUEBA";


test("pedido único producto online con disponibilidad", () => {
   const stock = generarMockAlmacen({
        ZAR: [10, 10]
    }, ID_PRODUCTO_PRUEBA);

   const pedido = generarPedidoCustom({
       key: ID_PRODUCTO_PRUEBA,
       esEcommerce: 1
   });

   const resultado = repartirUnidadesPedido(pedido, stock);

   expect(resultado.length).toBe(1);
   expect(resultado[0]!.estadoStock).toBe(TipoEstadoStock.ONLINE);
});

test("pedido online con varios productos con disponibilidad", () => {
    const stock = generarMockAlmacen({
        ZAR: [10, 10]
    }, ID_PRODUCTO_PRUEBA);

    const pedido = generarPedidoCustom({
        key: ID_PRODUCTO_PRUEBA,
        esEcommerce: 1,
        propuesta: 10
    });

    const resultado = repartirUnidadesPedido(pedido, stock);

    expect(resultado.length).toBe(1);
    expect(resultado[0]!.estadoStock).toBe(TipoEstadoStock.ONLINE);
    expect(resultado[0]!.propuesta).toBe(10);
});

test("pedido online que pasa por 2 almacenes", () => {
    const stock = generarMockAlmacen({
        ZAR: [0, 4],
        MSR: [10, 10]
    }, ID_PRODUCTO_PRUEBA);

    const pedido = generarPedidoCustom({
        key: ID_PRODUCTO_PRUEBA,
        esEcommerce: 1,
        propuesta: 10
    });

    const resultado = repartirUnidadesPedido(pedido, stock);

    // Recibimos 2 items
    expect(resultado.length).toBe(2);

    // Empieza por ZAR y se lleva los 4 que quedan
    expect(resultado[0]!.estadoStock).toBe(TipoEstadoStock.ONLINE);
    expect(resultado[0]!.propuesta).toBe(4);

    // Salta a MSR y coge el resto que falta
    expect(resultado[1]!.estadoStock).toBe(TipoEstadoStock.ONLINE);
    expect(resultado[1]!.propuesta).toBe(6);

});


test("pedido online salto a stock01", () => {
    const stock = generarMockAlmacen({
        ZAR: [9, 0],
    }, ID_PRODUCTO_PRUEBA);

    const pedido = generarPedidoCustom({
        key: ID_PRODUCTO_PRUEBA,
        esEcommerce: 1,
    });

    const resultado = repartirUnidadesPedido(pedido, stock);

    // Recibimos 1 item
    expect(resultado.length).toBe(1);

    // Al no estar disponible en stock online, salta al físico
    expect(resultado[0]!.estadoStock).toBe(TipoEstadoStock.FISICO);
});


test("Resta de stock", () => {
    const stock = generarMockAlmacen({
        ZAR: [10, 0]
    }, ID_PRODUCTO_PRUEBA);

    const pedido = generarPedidoCustom({
        key: ID_PRODUCTO_PRUEBA,
        esEcommerce: 1,
        propuesta: 10
    });

    const resultado = repartirUnidadesPedido(pedido, stock);

    expect(stock[0]!.stockEm05).toBe(0);
});