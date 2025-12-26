import {filterUnidadesStock} from "../filters/filters";
import {RepartoProcesado} from "../types/reparto-procesado";
import {PrerepartoBruto} from "../types/prereparto-bruto";
import {ColumnaEstadoStock, StockUnificado} from "../types/stock-unificado";
import {PRIORIDAD_ESTADO_PEDIDO} from "../index";

export function procesarPedidos(pedidos: PrerepartoBruto[], stock: StockUnificado[]) {
     return pedidos
        .flatMap((pedido) => repartirUnidadesPedido(pedido, stock))
}

export function repartirUnidadesPedido(pedido: PrerepartoBruto, stock: StockUnificado[]) {

    const unidadesFiltradas = filterUnidadesStock(pedido, stock);
    const estadosPrioridad: ColumnaEstadoStock[] = PRIORIDAD_ESTADO_PEDIDO[pedido.esEcommerce];
    let pendientes = pedido.propuesta;

    const registros: RepartoProcesado[] = [];

    for (const estado of estadosPrioridad) {
        for (const almacen of unidadesFiltradas) {
            if (pendientes <= 0) break;

            const stockDisponible = almacen[estado];

            if (stockDisponible > 0) {
                const asignadas = Math.min(pendientes, stockDisponible);

                registros.push({
                    key: pedido.key,
                    estadoStock: estado === "stockEm05" ? 5 : 1,
                    idTienda: pedido.tiendaId,
                    posicionCompleta: almacen.posicioncompleta,
                    propuesta: asignadas,
                    tipoStockDesc: almacen.tipoStockDesc
                });

                pendientes -= asignadas;
                almacen[estado] -= asignadas;
            }
        }
        if (pendientes <= 0) break;
    }

    return registros;
}